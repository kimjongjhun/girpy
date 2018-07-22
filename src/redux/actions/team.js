import { OPEN_MODAL, CLOSE_MODAL, GET_TEAM_FIXTURES, GET_TEAM_PLAYERS, SET_TEAM_TAB, RESET_TEAM_TAB } from '../types/team';

export const openModal = (id) => {
    return dispatch => fetch (`http://api.football-data.org/v2/teams/${id}`, {
        headers: {
            'X-Auth-Token': process.env.REACT_APP_FOOTBALL_DATA_TOKEN
        }
    })
        .then((res) => res.json())
        .then((data) => {
            dispatch({
                type: OPEN_MODAL,
                payload: {
                    data: data,
                    modalOpen: true
                }
            })
        })
};

export const getTeamFixtures = (id) => {
    return dispatch => fetch(`http://api.football-data.org/v2/teams/${id}/matches`, {
        headers: {
            'X-Auth-Token': process.env.REACT_APP_FOOTBALL_DATA_TOKEN
        }
    })
        .then((res) => res.json())
        .then((data) => {
            dispatch({
                type: GET_TEAM_FIXTURES,
                payload: {
                    data: data,
                    modalOpen: true
                }
            })
        })
};

export const getTeamPlayers = (id) => {
    return dispatch => fetch(`http://api.football-data.org/v1/teams/${id}/players`, {
        headers: {
            'X-Auth-Token': process.env.REACT_APP_FOOTBALL_DATA_TOKEN
        }
    })
        .then((res) => res.json())
        .then((data) => {
            dispatch({
                type: GET_TEAM_PLAYERS,
                payload: {
                    data: data,
                    modalOpen: true
                }
            })
        })
};

export const closeModal = () => {
    return dispatch => {
        dispatch({
            type: CLOSE_MODAL,
            payload: {
                tabOpen: false,
                teamTab: 0
            }
        })
    }
};

export const setTeamTab = (value) => {
    return dispatch => {
        dispatch({
            type: SET_TEAM_TAB,
            payload: value
        })
    }
};