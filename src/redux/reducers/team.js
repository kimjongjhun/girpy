import { OPEN_MODAL, CLOSE_MODAL } from '../types/team';

const initState = {
    modalOpen: false
};

export function teamReducer(state = initState, action) {
    console.log('team action received ', action);
    switch (action.type) {
        case OPEN_MODAL:
            console.log('open modal reducer hit');
            return Object.assign({}, state, {
                modalOpen: action.payload
            });

        case CLOSE_MODAL:
            return Object.assign({}, state, {
                modalOpen: action.payload
            });

        default:
            return state;
    }
}