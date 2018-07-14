import { SET_LEAGUE, GET_LEAGUE_TABLE, GET_LEAGUE_DATA, GO_HOME } from '../types/league';

const initState = {
    name: 'Girpy',
    leagueId: 0,
    pending: false,
    leagueData: {}
};

export function leagueReducer(state = initState, action) {
    switch (action.type) {
        case SET_LEAGUE:
            return Object.assign({}, state, {
                name: action.payload.name,
                leagueId: action.payload.leagueId,
                pending: true
            });

        case GET_LEAGUE_TABLE:
            return state;

        case GET_LEAGUE_DATA:
            action.payload.standings[0].table.map((team) => {
                team.id = team.id;
            });

            return Object.assign({}, state, {
                leagueData: action.payload,
                pending: false
            });

        case GO_HOME:
            return Object.assign({}, state, {
                name: 'Girpy',
                leagueId: 0,
                pending: false,
                leagueData: {}
            });

        default:
            return state;
    }
}