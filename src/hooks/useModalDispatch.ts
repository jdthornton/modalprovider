import { useContext } from 'react';

import { ModalDispatchContext } from '../provider/context';

export default function useModalDispatch() {
  const context = useContext(ModalDispatchContext);
  if (context === undefined) {
    throw new Error('useModalDispatch must be used within a ModalProvider');
  }
  return context;
};
