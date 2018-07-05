/*STUB for backend logic*/
/*TODO fix it with really backend provider implementation*/

export default class BackendProviderStub {
    /*TODO STUB fix hardcode*/
    constructor(){
        this.confRooms = [
            {id: "R1", capacity: 20, reservedFrames: [true, true, false, false, false, false, true, true, true, false, false, false]},
            {id: "R2", capacity: 10, reservedFrames: [true, true, false, false, true, false, true, false, true, false, false, false]}
        ];
        this.confHalls = [
            {id: "H1", capacity: 50, reservedFrames: [true, true, false, false, true, false, true, true, true, false, false, false]},
            {id: "H2", capacity: 75, reservedFrames: [false, true, false, true, true, false, true, false, true, false, false, false]}
        ];
        this.sportHalls = [
            {id: "SH1", capacity: 100, reservedFrames: [true, true, false, false, false, false, true, true, true, false, false, false]}
        ];
        this.grills = [
            {id: "Gr2", capacity: 35, reservedFrames: [false, true, false, true, true, false, true, false, true, false, false, false]},
            {id: "Gr1", capacity: 15, reservedFrames: [true, true, false, false, false, false, true, true, true, false, false, false]}
        ]
    }

    /*get reserve asset*/
    getReserveAsset(type){
        let result = null;
        /*TODO refactor it (as minimum with switch case)*/
        if(type === "confRoom") result = this.confRooms;
        if(type === "confHall") result = this.confHalls;
        if(type === "sportHall") result = this.sportHalls;
        if(type === "grill") result = this.grills;
        return result;
    }

}