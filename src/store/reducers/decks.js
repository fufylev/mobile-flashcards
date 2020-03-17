import { ADD_DECK } from '../types';

const initialState = {
    allDecks: [],

};

export const deckReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_DECK:
            return {
                ...state,

            };
        /*case TOGGLE_DECK:
            const allPosts = state.allPosts.map(post => {
                if (post.id === action.payload) {
                    post.booked = !post.booked;
                }
                return post;
            });

            return {
                ...state,
                allPosts,
                bookedPosts: allPosts.filter(post => post.booked),
            };
        case REMOVE_POST:
            return {
                ...state,
                allPosts: state.allPosts.filter(p => p.id !== action.payload),
                bookedPosts: state.bookedPosts.filter(p => p.id !== action.payload),
            };
        case ADD_POST:
            return {
                ...state,
                allPosts: [{ ...action.payload }, ...state.allPosts],
            };*/
        default:
            return state;
    }
};
