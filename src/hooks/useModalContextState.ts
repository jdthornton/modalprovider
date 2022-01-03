import { useContext } from 'react';

import { ModalStateContext } from '../provider/context';

export default function useModalContextState() {
  const context = useContext(ModalStateContext);
  if (context === undefined) {
    throw new Error('useModalContextState must be used within a ModalProvider');
  }
  return context;
}
