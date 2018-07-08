import {
    MESSAGES_LOADED,
    MESSAGES_ERROR,
    SEND_DATA,
} from '../constants/constants.js';

const initialState = {
    fetch: null,
    messages: [],
    error: null,
};

const topic = (state = initialState, {type, payload} ) => {
    switch (type) {

        case MESSAGES_LOADED:
            return {
                ...state,
                fetch: 'done',
                messages: payload,
            };

        case SEND_DATA:
            return {
                ...state,
                ...payload,
            };

        case MESSAGES_ERROR: {
            return {
                ...state,
                fetch: 'error',
                error: payload,
            }
        }

        default:
            return state;
    }
};

export default topic;