import * as React from "react";

/*TODO refactor as stateless component*/
export default class ReserveAssetReservedFrame extends React.Component{

    /*RENDERS*/
    render(){
        let currentReservedFrame = this.props.reservedFrame;
        if(currentReservedFrame) {
            return (
                <div className={'ReserveFrame free'}>free</div>
            );
        } else {
            return (
                <label className={'ReserveFrame reserved'}>reserved</label>
            );
        }
    }

}