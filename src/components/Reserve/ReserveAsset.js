import * as React from "react";
import ReservedFramesView from "./ReservedFramesView";

/*TODO refactor it as stateless component*/
export default class ReserveAsset extends React.Component{

    /*RENDERS*/
    render(){
        let currentAsset = this.props.asset;
        return (
            <div className={'ReserveAsset'}>
                <div className={'flex_container row'}>
                    <label className={'Label reserve'}>ID</label>
                    <div className={'Content review'}>{currentAsset.id}</div>
                </div>
                <div className={'flex_container row'}>
                    <label className={'Label reserve'}>Capacity</label>
                    <div className={'Content review'}>{currentAsset.capacity}</div>
                </div>
                <div className={'flex_container row'}>
                    <ReservedFramesView reservedFrames={this.props.asset.reservedFrames}/>
                </div>

            </div>
        );
    }

}