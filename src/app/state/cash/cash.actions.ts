import { createAction, props } from '@ngrx/store';

export const withdraw = createAction(
  '[Cash] Withdraw',
  props<{ amount: number }>()
);

export const updateBalance = createAction(
  '[Cash] Update Balance',
  props<{ amount: number }>()
);

export const setErrorState = createAction(
  '[Cash] Set Error State',
  props<{ error: any }>()
);
