import { useReducer, useCallback, ReactNode } from 'react';
import useKeyPress from '@jdthornton/usekeypress';
import useInert from '@jdthornton/useinert';
import useLockBodyScroll from '@jdthornton/uselockbodyscroll';

import modalReducer, { initialState } from './reducer';
import { closeAction } from './actions';
import { ModalStateContext, ModalDispatchContext } from './context';
import { State } from '../types';

const canCloseOnEsc = ({ stack, map }: State) => stack.length > 0 && map[stack[stack.length - 1]]?.options?.closeOnEsc

type ModalProviderProps = {
  root: string;
  children: ReactNode;
}

export default function ModalProvider({
  root,
  children
}: ModalProviderProps) {
  const [modalState, modalDispatch] = useReducer(modalReducer, initialState),
        closeTopModal = useCallback(() => {
          modalDispatch(closeAction(modalState.stack[modalState.stack.length - 1]))
        },[modalState.stack,modalDispatch])

  useKeyPress(canCloseOnEsc(modalState) ? closeTopModal : null,27)
  useInert(modalState.stack.length > 0 ? root : null)
  useLockBodyScroll(modalState.stack.length > 0)
  return (
    <ModalStateContext.Provider value={modalState}>
      <ModalDispatchContext.Provider value={modalDispatch}>
        {children}
      </ModalDispatchContext.Provider>
    </ModalStateContext.Provider>
  )
}
