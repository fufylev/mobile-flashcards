import { ADD_DECK, SET_DECKS, REMOVE_DECK } from '../types';
import { setStorage } from '../../utils/helpers';

const initialState = {
    allDecks: [],
};

export const deckReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_DECKS:
            return {
                allDecks: action.payload,
            };

        case ADD_DECK:
            const newDeck = action.payload;

            const allDecks = [...state.allDecks, newDeck];
            setStorage(allDecks);

            return {
                ...state,
                allDecks,
            };

        default:
            return state;
    }
};
