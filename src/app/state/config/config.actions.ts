import { createAction, props } from '@ngrx/store';

export const configure = createAction(
  '[Config] Configure Application',
  props<{apiUrl: string}>()
);
