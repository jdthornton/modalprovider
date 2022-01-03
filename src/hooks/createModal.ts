import { ModalKey, Options, ModalObject } from '../types';

import useModal from './useModal';
import useRegister from './useRegister';

export default function createModal(
  key: ModalKey,
  options?: Options
): ModalObject {
  const modal = useModal(key);
  useRegister(key,options)
  return modal
}
