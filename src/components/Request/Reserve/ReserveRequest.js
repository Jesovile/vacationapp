import * as React from "react";
import {Dropdown} from 'primereact/components/dropdown/Dropdown';

export default class ReserveRequest extends React.Component{
    constructor(props){
        super(props);

        /*Init state*/
        this.state = {assetType: ""};
    }


    /*CONSTANTS*/
    /*TODO fix hardcode*/
    assetTypes = [
        {label: "Conference Room", value: "confRoom"},
        {label: "Conference Hall", value: "confHall"},
        {label: "Sport Hall", value: "sportHall"},
        {label: "Grill place", value: "grill"}
    ]


    /*HANDLERS*/
    commonOnChangeHandler = (value, propName) => {
        this.setState({[propName]: value});
    }


    /*RENDERS*/
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
                </div>

            </div>
        );
    }

}