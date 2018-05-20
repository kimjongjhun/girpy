import { createStore, combineReducers, applyMiddleware } from 'redux';
import { leagueReducer } from './reducers/league';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

const reducer = combineReducers({
    leagueReducer
});

const store = createStore(
    reducer,
    applyMiddleware(thunk, logger)
);

export default store;