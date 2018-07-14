import * as React from "react";
import ReserveAssetReservedFrame from "./ReserveAssetReservedFrame";

/*TODO refactor it as stateless component*/
export default class ReserveAsset extends React.Component{/*HANDLERS*/

    /*RENDERS*/
    renderAssetReservedFrames = () => {
        let currentFrames = this.props.asset.reservedFrames;
        return(
            currentFrames.map((item, key) => (
                <ReserveAssetReservedFrame key ={key} frameIdex={key} reservedFrame={item}/>
            ))
        );
    }

    render(){
        let currentAsset = this.props.asset;
        return (
            <div>
                <div>
                    <label>ID=</label>
                    <label>{currentAsset.id}</label>
                </div>
                <div>
                    <label>Capacity=</label>
                    <label>{currentAsset.capacity}</label>
                </div>
                <div>
                    <label>Frames=</label>
                    {this.renderAssetReservedFrames()}
                </div>

            </div>
        );
    }

}