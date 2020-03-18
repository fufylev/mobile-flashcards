import { ADD_CARD_TO_DECK, ADD_DECK, REMOVE_DECK, SET_DECKS } from '../types';
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

        case ADD_CARD_TO_DECK:
            const { card, deckId } = action.payload;

            const data = state.allDecks.map(deck => {
                if (deck.id === deckId) {
                    deck.cards = [...deck.cards, card];
                }
                return deck;
            });

            setStorage(data);

            return {
                ...state,
                allDecks: data,
            };

        default:
            return state;
    }
};
