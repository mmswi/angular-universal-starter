import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import {environment} from '@src/environments/environment';
import {AppStateInterface as State} from '@app/interfaces/app.interface';
import {debugReducer} from './meta.reducer';
import * as userReducer from './user.reducer';

export const reducers: ActionReducerMap<State> = {
  user  : userReducer.reducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [debugReducer] : [];
