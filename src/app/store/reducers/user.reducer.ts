import {createReducer, on} from '@ngrx/store';
import * as actions from '../actions/user.actions';
import {anyObj} from '@app/interfaces/shared.types.interface';
import {UserInterface as State} from '@app/interfaces/user.interface';

export const initialState: State = {
  guid: ''
};

const guidReducerCb = (state: State, {guid}: anyObj) => ({...state, guid});

export const reducer = createReducer(
  initialState,
  on(actions.setGuid, guidReducerCb)
);
