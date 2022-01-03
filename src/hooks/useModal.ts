import { ModalKey, ModalObject } from '../types';

import useModalState from './useModalState';
import useModalHandlers from './useModalHandlers';

export default function useModal(key: ModalKey): ModalObject {
  const state = useModalState(key),
        handlers = useModalHandlers(key);
  return({
    ...state,
    ...handlers
  })
}
