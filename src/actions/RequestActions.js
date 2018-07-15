export const ADD_REQUEST = 'ADD_REQUEST';

export function requestActionProducer(request){
    return {
        type: ADD_REQUEST,
        request: request
    }
}