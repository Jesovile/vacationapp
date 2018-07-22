import {combineReducers } from "redux";
import RequestReducer from "./RequestReducer";
import ReserveReducer from "./ReserveReducer";

/*combine reducers for every part of state in common RootReducer*/
export default combineReducers({
        requests: RequestReducer,
        reservePlaces: ReserveReducer
    }
)
