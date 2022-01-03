import { createContext, Dispatch } from 'react';

import { State } from '../types';

export const ModalStateContext = createContext<State | null>(null);
export const ModalDispatchContext = createContext<Dispatch<any> | null>(null);
