import { State, ActionKind, Action } from '../types';

export const initialState: State = {stack: [],map: {}};

export default function modalReducer(state: State = initialState, {type,key,payload}: Action): State {
  switch (type) {
    case ActionKind.Register:
      return {
        ...state,
        map: {
          ...state.map,
          [key]: payload
        }
      }
    case ActionKind.Open:
      return {
        stack: [...state.stack,key],
        map: {
          ...state.map,
          [key]: {
            ...state.map[key],
            data: payload,
            isOpen: true
          }
        }
      }
    case ActionKind.Update:
      return {
        ...state,
        map: {
          ...state.map,
          [key]: {
            ...state.map[key],
            ...payload
          }
        }
      }
    case ActionKind.Close:
      return {
        stack: state.stack.filter(o => o !== key),
        map: {
          ...state.map,
          [key]: {
            ...state.map[key],
            isOpen: false
          }
        }
      }
    case ActionKind.Unregister:
      const {map: {[key]: removedModal,...map},stack} = state;
      return {
        map,
        stack: stack.filter(o => o !== key)
      }
    default:
      throw new Error(`Unhandled action type: ${type}`)
  }
}
