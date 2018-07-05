import * as React from "react";

/*TODO refactor as stateless component*/
export default class ReserveAssetReservedFrame extends React.Component{

    /*RENDERS*/
    render(){
        let currentReservedFrame = this.props.reservedFrame;
        if(currentReservedFrame) {
            return (
                <label style={{backgroundColor: 'green', marginRight: '5px'}}>free</label>
            );
        } else {
            return (
                <label style={{backgroundColor: 'red', marginRight: '5px'}}>reserved</label>
            );
        }
    }

}