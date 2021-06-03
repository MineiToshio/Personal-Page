import { useCallback, useState, Dispatch, SetStateAction } from 'react';

const useBoolean = (
  initialValue = false,
): [boolean, () => void, () => void, Dispatch<SetStateAction<boolean>>] => {
  const [state, setState] = useState(initialValue);
  const setTrue = useCallback(() => setState(true), []);
  const setFalse = useCallback(() => setState(false), []);

  return [state, setTrue, setFalse, setState];
};

export default useBoolean;
