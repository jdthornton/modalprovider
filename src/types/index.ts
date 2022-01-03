export enum ActionKind {
  Open = "OPEN",
  Close = "CLOSE",
  Update = "UPDATE",
  Register = "REGISTER",
  Unregister = "UNREGISTER"
}

export type ModalKey = string;
export type ModalData = any;

export type Options = {
  closeOnEsc?: boolean;
}

export interface Payload {
  isOpen?: boolean;
  options?: Options;
  data?: ModalData;
}

export type OpenModalHandler = (p?: ModalData) => void
export type UpdateModalHandler = (p: Payload) => void

export type ModalHandlers = {
  close: () => void;
  open: OpenModalHandler;
  update: UpdateModalHandler;
}

export type ModalObject = ModalHandlers & Payload

export interface ModalMap {
  [key: string]: Payload | undefined;
}

export interface State {
  stack: ModalKey[];
  map: ModalMap;
}

export interface Action {
  type: ActionKind;
  key: string;
  payload?: Payload;
}
