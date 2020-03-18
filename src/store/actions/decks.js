import { ADD_DECK, SET_DECKS, REMOVE_DECK } from '../types';

export const addDeck = deck => {
    return {
        type: ADD_DECK,
        payload: deck,
    };
};

export const setDecksToStorage = decks => {
    console.log('Отработала функция записи в хранилище');
    return {
        type: SET_DECKS,
        payload: decks,
    };
};

export const removeDeck = (id) => {
    return {
        type: REMOVE_DECK,
        payload: id,
    };
};
