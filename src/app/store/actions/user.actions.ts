import {createAction, props} from '@ngrx/store';

export const setGuid = createAction(
  '[USER] Set user guid',
  props<{guid: string}>()
);
