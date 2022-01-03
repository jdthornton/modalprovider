import { ModalKey, ActionKind, Action, Options, ModalData, Payload } from '../types';

export const registerAction = (
  key: ModalKey,
  options: Options = {closeOnEsc: true},
  isOpen = false
): Action => ({
  type: ActionKind.Register,
  key,
  payload: {
    isOpen,
    options
  }
})

export const openAction = (
  key: ModalKey,
  payload: ModalData = {}
): Action => ({
  type: ActionKind.Open,
  key,
  payload
})

export const updateAction = (
  key: ModalKey,
  payload: Payload = {}
): Action => ({
  type: ActionKind.Update,
  key,
  payload
})

export const closeAction = (
  key: ModalKey
): Action => ({
  type: ActionKind.Close,
  key
})

export const unregisterAction = (
  key: ModalKey
): Action => ({
  type: ActionKind.Unregister,
  key
})
