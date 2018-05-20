import { SET_LEAGUE, GET_LEAGUE_TABLE } from '../types/league';

export const setLeague = (league) => {
    return dispatch => {
        dispatch({
            type: SET_LEAGUE,
            payload: {
                name: league.name,
                leagueId: league.leagueId
            }
        })
    }
};

export const getLeagueTable = (leagueId) => {
    return dispatch => {
        dispatch({
            type: GET_LEAGUE_TABLE,
            payload: leagueId
        })
    }
};