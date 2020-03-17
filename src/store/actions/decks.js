import { ADD_DECK } from '../types';

export const addDeck = deck => {
    return {
        type: ADD_DECK,
        payload: deck,
    };
};
