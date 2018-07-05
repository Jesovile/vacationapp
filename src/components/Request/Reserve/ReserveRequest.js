import * as React from "react";
import {Dropdown} from 'primereact/components/dropdown/Dropdown';
import BackendProviderWrapper from "../../../utils/BackendProviderWrapper";
import ReserveAsset from "./ReserveAsset";

export default class ReserveRequest extends React.Component{
    constructor(props){
        super(props);

        /*Init state*/
        this.state = {assetType: ""};

        /*Dependency Injection*/
        this.provider = this.getBackendProvider();
    }


    /*CONSTANTS*/
    /*TODO fix hardcode*/
    assetTypes = [
        {label: "Conference Room", value: "confRoom"},
        {label: "Conference Hall", value: "confHall"},
        {label: "Sport Hall", value: "sportHall"},
        {label: "Grill place", value: "grill"}
    ]


    /*UTILS*/
    /*TODO refactor this with true DI container (maybe with Redux) */
    getBackendProvider = () => {
        return new BackendProviderWrapper().getProvider();
    }


    /*HANDLERS*/
    commonOnChangeHandler = (value, propName) => {
        this.setState({[propName]: value});
    }


    /*RENDERS*/
    renderAssets = (assetType) => {
        if(assetType) {
            let assetsArray = this.getBackendProvider().getReserveAsset(assetType);
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

                <div>
                    <label htmlFor={"assetType"}>Asset type</label>
                    <Dropdown
                        id={'assetType'}
                        value={this.state.assetType}
                        onChange={(event) => this.commonOnChangeHandler(event.value, "assetType")}
                        options={this.assetTypes}
                    />

                    {this.renderAssets(this.state.assetType)}

                </div>

            </div>
        );
    }

}