import { OPEN_MODAL, CLOSE_MODAL } from '../types/team';

export const openModal = () => {
    console.log('openModal action hit');
    return dispatch => {
        dispatch({
            type: OPEN_MODAL,
            payload: {
                modalOpen: true
            }
        })
    }
};

export const closeModal = () => {
    return dispatch => {
        dispatch({
            type: CLOSE_MODAL,
            payload: {
                modalOpen: false
            }
        })
    }
};