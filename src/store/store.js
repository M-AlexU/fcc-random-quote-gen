import logger from 'redux-logger';
import { thunk } from 'redux-thunk';
import { applyMiddleware, compose, createStore, combineReducers } from 'redux';
import { fetchQuote, quoteReducer } from './ducks/quote';

const rootReducer = combineReducers({
    quote: quoteReducer
});
const middlewares = [logger, thunk];

const composedEnhancers = compose(applyMiddleware(...middlewares));

const store = createStore(rootReducer, undefined, composedEnhancers);

store.dispatch(fetchQuote());

export default store;