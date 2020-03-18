import { ADD_DECK, SET_DECKS, REMOVE_DECK } from '../types';
import { setStorage } from '../../utils/helpers';

const initialState = {
    allDecks: [],
};

export const deckReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_DECKS:
            return {
                ...state,
                allDecks: action.payload,
            };

        case ADD_DECK:
            const newDeck = action.payload;

            setStorage([...state.allDecks, newDeck]);

            return {
                ...state,
                allDecks: [...state.allDecks, newDeck],
            };

        case REMOVE_DECK:
            const id = action.payload;

            setStorage([...state.allDecks].filter(deck => deck.id !== id));

            return {
                ...state,
                allDecks: [...state.allDecks].filter(deck => deck.id !== id),
            };

        default:
            return state;
    }
};
