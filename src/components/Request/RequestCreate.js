import * as React from "react";
import {Dropdown} from 'primereact/components/dropdown/Dropdown';
import VacationRequest from "./Vacation/VacationRequest";

export default class RequestCreate extends React.Component{
    constructor(props){
        super(props);

        /*Init state*/
        this.state={
            requestType: "",
        }
    }


    /*TODO fix this hardcode*/
    requestTypeOptions = [
        {label: "Vacation", value: "vacation"},
        {label: "Support", value: "support"},
        {label: "Reserve", value: "reserve"}
        ]


    commonOnChangeHandler = (value, propName) => {
        this.setState({[propName]: value});
    }


    /*TODO why it isn't work (function isn't valid React child component)*/
    renderRequestContent = () => {
        if(this.state.requestType === "vacation"){
            console.log(this.state.requestType);
            return <VacationRequest/>;
        }
    }

    render(){
        return(
            <div>
                <h2>Request</h2>

                <label>Request type</label>
                <Dropdown
                    value={this.state.requestType}
                    onChange={(event) => this.commonOnChangeHandler(event.value, "requestType")}
                    options={this.requestTypeOptions}
                />

                { this.state.requestType === "vacation" ? <VacationRequest/> : null}


            </div>
        );
    }

}