import * as cloneDeep from 'lodash.clonedeep';
import { ConfigLogic } from './config.logic';

describe('Config Logic', () => {
    it('should set the API URL', () => {
        const state = { apiUrl: 'foo'};

        const newState = ConfigLogic.configure(state, 'bar');

        expect(newState).not.toBe(state);
        expect(newState.apiUrl).toEqual('bar');
    });
});
