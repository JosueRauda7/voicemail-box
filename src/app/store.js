import { createStore } from 'redux';

const initialState = {
    voicemails: [],
};

const reducer = (state = initialState, action) => {
    return state;
}

export default createStore( reducer );