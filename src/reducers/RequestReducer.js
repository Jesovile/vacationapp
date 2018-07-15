import {ADD_REQUEST, DELETE_REQUEST} from "../actions/RequestActions";

const initialState = {
    requests: []
}

export default function RequestReducer(state=initialState, action){

    switch(action.type){
        case ADD_REQUEST:
            return Object.assign({}, state, {
               requests: [
                   ...state.requests, action.request
               ]
            })
        case DELETE_REQUEST:
            return {
                ...state,
                requests: [
                    ...state.requests.slice(0, action.index),
                    ...state.requests.slice(action.index + 1)
                ]
            }
        default:
            return state
    }
}