import React, {Component} from 'react';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';

import store from '../../redux/store';
import { openModal, closeModal } from '../../redux/actions/team';

const modalStyle = {
    top: '50%',
    left: '50%'
};

const modalClassName = {
    position: 'absolute',
    width: '100px',
    height: '100px'
};

class Team extends Component {
    render() {
        return (
            <div>
                <Button onClick={() => {
                    console.log('team props hit', this.props);
                    store.dispatch(openModal());
                }}>
                    Open
                </Button>
                <Modal onClose={closeModal()}>
                    <div style={modalStyle} className={modalClassName}>
                        <h1>asdkjlaksdjlfasdf</h1>
                    </div>
                </Modal>
            </div>
        )
    }
}

export default Team;