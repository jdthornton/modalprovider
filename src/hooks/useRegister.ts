import { useEffect } from 'react';

import { registerAction, unregisterAction } from '../provider/actions';
import { ModalKey, Options } from '../types';

import useModalDispatch from './useModalDispatch';

export default function useRegister(
  key: ModalKey,
  options?: Options
) {
  const modalDispatch = useModalDispatch();
  useEffect(() => {
    modalDispatch?.(registerAction(key,options))
    return () => {
      modalDispatch?.(unregisterAction(key))
    }
  },[])
}
