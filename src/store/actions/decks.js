import { ADD_DECK } from "../types";

export const addDeck = deck => async dispatch => {

    dispatch({
        type: ADD_DECK,
        payload: deck
    });
};