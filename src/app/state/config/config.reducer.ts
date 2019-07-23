import { createReducer, on } from '@ngrx/store';
import { configure } from './config.actions';
import { ConfigLogic } from './config.logic';

export const configReducer = createReducer(
    {apiUrl: ''},
    on(
      configure,
      (state, action) => ConfigLogic.configure(state, action.apiUrl)
    )
);
