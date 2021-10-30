import {ActionReducer} from '@ngrx/store';

export function debugReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return function(state, action) {
    console.log('action', action);

    return reducer(state, action);
  };
}
