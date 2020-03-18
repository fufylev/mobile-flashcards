import { ADD_DECK, SET_DECKS, REMOVE_DECK, ADD_CARD_TO_DECK } from '../types';

export const addDeck = deck => {
    return {
        type: ADD_DECK,
        payload: deck,
    };
};

export const addCardToDeck = ({ card, deckId }) => {
    return {
        type: ADD_CARD_TO_DECK,
        payload: { card, deckId },
    };
};

export const setDecksToStorage = decks => {
    console.log('Отработала функция записи в хранилище');
    return {
        type: SET_DECKS,
        payload: decks,
    };
};

export const removeDeck = id => {
    return {
        type: REMOVE_DECK,
        payload: id,
    };
};
