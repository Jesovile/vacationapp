export const ADD_REQUEST = 'ADD_REQUEST';
export const DELETE_REQUEST = 'DELETE_REQUEST';


export function requestAddActionProducer(request){
    return {
        type: ADD_REQUEST,
        request: request
    }
}

export function requestDeleteActionProducer(index){
    return {
        type: DELETE_REQUEST,
        index: index
    }
}