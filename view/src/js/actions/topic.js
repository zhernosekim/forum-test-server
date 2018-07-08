import {
    MESSAGES_LOADED,
    MESSAGES_ERROR,
    SEND_DATA,
} from '../constants/constants.js';

export function loadMessages() {
    return dispatch => Promise.resolve()
        .then(() => fetch('/message').then(res => res.json()))
        .then(messages => dispatch({
            type: MESSAGES_LOADED,
            payload: messages,
        }))
        .catch(error => {
            console.error(error);
            dispatch({
                type: MESSAGES_ERROR,
                payload: error,
            })
        });
}

export function sendMessage(data) {
    return dispatch => Promise.resolve()
        .then(() => {
            const body = JSON.stringify(data);
            return fetch('/message', {
                method: 'POST',
                body,
                headers: {
                    'Content-Type': 'application/json',
                }
            });
        })
        .then(result => dispatch({
            type: SEND_DATA,
        }))
        .then(() => loadMessages()(dispatch))
        .catch(error => {
            console.error(error);
            dispatch({
                type: MESSAGES_ERROR,
                payload: error,
            })
        });
}