import {SET_LEAGUE, GET_LEAGUE_TABLE} from '../types/league';

const initState = {
    name: 'Girpy',
    leagueId: 0,
    pending: false,
    leagueData: {}
};

export function leagueReducer(state = initState, action) {
    switch (action.type) {
        case SET_LEAGUE:
            return {
                ...state,
                name: action.payload.name,
                leagueId: action.payload.leagueId,
                pending: true
            };
        case GET_LEAGUE_TABLE:
            let leagueData = {};
            fetch(`http://api.football-data.org/v1/competitions/${action.payload}/leagueTable`, {
                headers: {
                    'X-Auth-Token': process.env.REACT_APP_FOOTBALL_DATA_TOKEN
                }
            })
                .then((res) => res.json())
                .then((data) => {
                        console.log('data', data);
                        leagueData = data;
                        console.log('league data hit 1', leagueData);
                        return data;
                    }
                );
            console.log('league data hit', leagueData);
            return state;
        default:
            return state;
    }
}