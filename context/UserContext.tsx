import React, { FC, useState, useEffect } from 'react';
import useBoolean from '@/hooks/useBoolean';
import { auth } from '@/firebase';
import type Firebase from 'firebase';
import type { User } from '@/types/firebase';

type ContextProps = {
  currentUser: User;
  initializing: boolean;
};

type UserConfigProviderProps = {
  children: React.ReactNode | Array<React.ReactNode>;
};

export const UserContext = React.createContext<ContextProps>({
  currentUser: null,
  initializing: true,
});

const mapFirebaseAuthUser = (user: Firebase.User | null, isAdmin = false) => {
  if (user == null) return null;
  const { uid, displayName, email, photoURL, providerId, emailVerified } = user;
  return {
    uid,
    displayName,
    email,
    photoURL,
    providerId,
    emailVerified,
    isAdmin,
  } as User;
};

const UserConfigProvider: FC<UserConfigProviderProps> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User>(mapFirebaseAuthUser(auth.currentUser));
  const [initializing, , setInitializingFalse] = useBoolean(true);

  useEffect(() => {
    const getResolveAuthChange = async (user: Firebase.User | null) => {
      if (user == null) {
        setCurrentUser(null);
      } else {
        const idTokenResult = await user.getIdTokenResult();
        const isAdmin = idTokenResult?.claims.isAdmin;
        if (isAdmin) {
          setCurrentUser(mapFirebaseAuthUser(user, true));
        } else {
          auth.signOut();
        }
      }
      setInitializingFalse();
    };

    const unsubscribe = auth.onAuthStateChanged(getResolveAuthChange);
    return () => unsubscribe();
  }, [setInitializingFalse]);

  return (
    <UserContext.Provider value={{ currentUser, initializing }}>{children}</UserContext.Provider>
  );
};

export default UserConfigProvider;
