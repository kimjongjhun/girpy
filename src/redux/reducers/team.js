import { OPEN_MODAL, CLOSE_MODAL, GET_TEAM_FIXTURES, GET_TEAM_PLAYERS, SET_TEAM_TAB } from '../types/team';

const initState = {
    teamTab: 0,
    modalOpen: false,
    fixturesOpen: false,
    playersOpen: false,
    teamBaseInfo: {},
    teamFixturesInfo: {},
    teamPlayersInfo: {}
};

export function teamReducer(state = initState, action) {
    switch (action.type) {
        case OPEN_MODAL:
            console.log('open modal hit');
            return Object.assign({}, state, {
                modalOpen: action.payload.modalOpen,
                teamBaseInfo: action.payload.data
            });

        case CLOSE_MODAL:
            return Object.assign({}, state, {
                modalOpen: action.payload.tabOpen,
                teamTab: action.payload.teamTab
            });

        case GET_TEAM_FIXTURES:
            console.log('get team fixtures hit');
            return Object.assign({}, state, {
                fixturesOpen: action.payload.modalOpen,
                teamFixturesInfo: action.payload.data
            });

        case GET_TEAM_PLAYERS:
            console.log('get team players hit');
            return Object.assign({}, state, {
                playersOpen: action.payload.modalOpen,
                teamPlayersInfo: action.payload.data
            });

        case SET_TEAM_TAB:
            console.log('set team tab reducer hit');
            return Object.assign({}, state, {
                teamTab: action.payload
            });

        default:
            return state;
    }
}