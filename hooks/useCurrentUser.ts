import { useContext } from 'react';
import { UserContext } from '../context/UserContext';

const useCurrentUser = () => {
  const { currentUser, initializing } = useContext(UserContext);
  return {
    currentUser,
    initializing,
  };
};

export default useCurrentUser;
