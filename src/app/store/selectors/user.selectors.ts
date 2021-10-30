import {createFeatureSelector, createSelector} from '@ngrx/store';
import {UserInterface as UserState} from '@app/interfaces/user.interface';

const userStateKey = 'user';

const selectUserState = createFeatureSelector<UserState>(userStateKey);

const getGuid = (state: UserState) => ({
  guid: state.guid
});

export const selectGuid = createSelector(
  selectUserState,
  getGuid
);
