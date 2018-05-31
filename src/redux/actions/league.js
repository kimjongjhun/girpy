import { SET_LEAGUE, GET_LEAGUE_TABLE, GET_LEAGUE_DATA, GO_HOME } from '../types/league';
import store from '../store';

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

export const getLeagueData = () => {
    let leagueId = store.getState().leagueReducer.leagueId;
    if (leagueId > 0) {
        return dispatch => fetch(`http://api.football-data.org/v1/competitions/${leagueId}/leagueTable`, {
            headers: {
                'X-Auth-Token': process.env.REACT_APP_FOOTBALL_DATA_TOKEN
            }
        })
            .then((res) => res.json())
            .then((data) => {
                dispatch({
                    type: GET_LEAGUE_DATA,
                    payload: data
                })
            });
    } else {
        return dispatch => {
            dispatch({
                type: GO_HOME
            })
        }
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