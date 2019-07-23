import * as cloneDeep from 'lodash.clonedeep';

export class ConfigLogic {
  static configure(state: { apiUrl: string }, apiUrl: string) {
    const newState = cloneDeep(state);
    newState.apiUrl = apiUrl;

    return newState;
  }
}
