import { ModalKey, Payload } from '../types';

import useModalContextState from './useModalContextState';

export default function useModalState(key: ModalKey): Payload | undefined {
  const modalState = useModalContextState();
  return modalState?.map[key]
}
