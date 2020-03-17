import { ADD_DECK } from '../types';

const initialState = {
    allDecks: [],

};

export const deckReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_DECK:
            const newDeck = action.payload;
            
            return {
                ...state,
                allDecks: [
                    ...state.allDecks,
                    newDeck
                ]
            };
        
        default:
            return state;
    }
};
