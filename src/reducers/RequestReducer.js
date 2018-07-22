import {ADD_REQUEST, DELETE_REQUEST} from "../actions/RequestActions";

/*TODO add filtering by Requestor and Performer in next sprints*/
const initialState = {
    emplRequests: [] //employee requests filtered by requester
}

export default function RequestReducer(state=initialState, action){

    switch(action.type){
        case ADD_REQUEST:
            return Object.assign({}, state, {
                emplRequests: [
                   ...state.emplRequests, action.request
               ]
            })
        case DELETE_REQUEST:
            return {
                ...state,
                emplRequests: [
                    ...state.emplRequests.slice(0, action.index),
                    ...state.emplRequests.slice(action.index + 1)
                ]
            }
        default:
            return state
    }
}