import { createStore, combineReducers, applyMiddleware } from 'redux';
import { deckReducer } from './reducers/decks';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    deck: deckReducer,
});

export default createStore(rootReducer, applyMiddleware(thunk));