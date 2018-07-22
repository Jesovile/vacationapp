import * as React from "react";
import {connect} from "react-redux";
import {Dropdown} from 'primereact/components/dropdown/Dropdown';
import ReserveAsset from "../components/Reserve/ReserveAsset";

export class ReserveRequest extends React.Component{
    constructor(props){
        super(props);

        /*Init state*/
        this.state = {assetType: ""};
    }


    /*CONSTANTS*/
    /*TODO fix hardcode with dictionaries*/
    assetTypes = [
        {label: "Conference Room", value: "confRooms"},
        {label: "Conference Hall", value: "confHalls"},
        {label: "Sport Hall", value: "sportHalls"},
        {label: "Grill place", value: "grills"}
    ]


    /*HANDLERS*/
    commonOnChangeHandler = (value, propName) => {
        this.setState({[propName]: value});
    }


    /*RENDERS*/
    renderAssets = (assetType) => {
        if(assetType) {
            let assetsArray = this.props.reservePlaces[assetType];
            return (
                assetsArray.map((item, key) => (

                    <ReserveAsset key={key} asset={item}/>
                ))
            );
        } else return null;
    }


    render(){
        return(
            <div>
                <h2>Reserve Request</h2>
                <hr/>

                <div className={'flex_container row'}>
                    <label className={'Label'} htmlFor={"assetType"}>Place type</label>
                    <Dropdown
                        className={'Content'}
                        id={'assetType'}
                        value={this.state.assetType}
                        onChange={(event) => this.commonOnChangeHandler(event.value, "assetType")}
                        options={this.assetTypes}
                    />
                </div>
                <div className={'flex_container row'}>
                    {this.renderAssets(this.state.assetType)}
                </div>

            </div>
        );
    }

}

function mapStateToProps(state){
    return {
        reservePlaces: state.reservePlaces
    }
}

export default connect(mapStateToProps)(ReserveRequest);