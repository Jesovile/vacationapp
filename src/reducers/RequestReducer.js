import {ADD_REQUEST} from "../actions/RequestActions";

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
        default:
            return state
    }
}