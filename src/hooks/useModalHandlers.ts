import { closeAction, openAction, updateAction } from '../provider/actions';
import { ModalKey, ModalData, Payload, ModalHandlers } from '../types';

import useModalDispatch from './useModalDispatch';

export default function useModalHandlers(key: ModalKey): ModalHandlers {
  const modalDispatch = useModalDispatch();
  return({
    close: () => modalDispatch?.(closeAction(key)),
    open: (data?: ModalData) => modalDispatch?.(openAction(key,data)),
    update: (payload: Payload) => modalDispatch?.(updateAction(key,payload))
  })
}
