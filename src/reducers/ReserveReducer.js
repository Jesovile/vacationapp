import {SHOW_ALL} from "../actions/ReserveActions";

const initialStateReserve = {
    confRooms: [
        {
            id: "R1",
            capacity: 20,
            reservedFrames: [true, true, false, false, false, false, true, true, true, false, false, false]
        },
        {
            id: "R2",
            capacity: 10,
            reservedFrames: [true, true, false, false, true, false, true, false, true, false, false, false]
        }
    ],
    confHalls: [
        {
            id: "H1",
            capacity: 50,
            reservedFrames: [true, true, false, false, true, false, true, true, true, false, false, false]
        },
        {
            id: "H2",
            capacity: 75,
            reservedFrames: [false, true, false, true, true, false, true, false, true, false, false, false]
        }
    ],
    sportHalls: [
        {
            id: "SH1",
            capacity: 100,
            reservedFrames: [true, true, false, false, false, false, true, true, true, false, false, false]
        }
    ],
    grills: [
        {
            id: "Gr2",
            capacity: 35,
            reservedFrames: [false, true, false, true, true, false, true, false, true, false, false, false]
        },
        {
            id: "Gr1",
            capacity: 15,
            reservedFrames: [true, true, false, false, false, false, true, true, true, false, false, false]
        }
    ]
}

export default function ReserveReducer(state=initialStateReserve, action) {
    switch (action.type){
        case SHOW_ALL:
            return state;
        default: return state;
    }
}

