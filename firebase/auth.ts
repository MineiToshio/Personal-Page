import type Firebase from 'firebase';
import firebase, { auth } from '.';

const catchError = (error: Firebase.auth.Error) => {
  if (error.code === 'auth/web-storage-unsupported') {
    return { error: 'Por favor activa las cookies de tu navegador para usar Wozzii.' };
  }
  if (error.code === 'auth/email-already-in-use') {
    return { error: 'El correo que has ingresado no se encuentra disponible.' };
  }
  if (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password') {
    return { error: 'El correo o contraseña no son correctos.' };
  }
  if (error.code === 'auth/weak-password') {
    return { error: 'La contraseña debe de contener por lo menos 6 caracteres.' };
  }
  if (error.code === 'auth/account-exists-with-different-credential') {
    return {
      error:
        'La cuenta con la que intentas ingresar ya se encuentra asociada a un usuario. ¿Quizá tienes una cuenta como correo/contraseña?',
    };
  }
  throw error;
};

const verifyAdmin = async (userData: Firebase.auth.UserCredential) => {
  const idTokenResult = await userData.user?.getIdTokenResult();
  if (idTokenResult?.claims.isAdmin) {
    return userData;
  }
  return { error: 'El correo o contraseña no son correctos.' };
};

export const loginGoogle = async () => {
  // eslint-disable-next-line import/no-named-as-default-member
  const provider = new firebase.auth.GoogleAuthProvider();

  try {
    const userData = await auth.signInWithPopup(provider);
    return await verifyAdmin(userData);
  } catch (e) {
    return catchError(e);
  }
};

export const logout = async () => {
  await auth.signOut();
};
