import { createStore, combineReducers, applyMiddleware } from 'redux';
import { leagueReducer } from './reducers/league';
import { teamReducer } from './reducers/team';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

const reducers = combineReducers({
    leagueReducer,
    teamReducer
});

const store = createStore(
    reducers,
    {},
    applyMiddleware(thunk, logger)
);

export default store;