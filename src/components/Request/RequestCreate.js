import * as React from "react";
import {Dropdown} from 'primereact/components/dropdown/Dropdown';
import VacationRequest from "./Vacation/VacationRequest";
import SupportRequest from "./Support/SupportRequest";
import ReserveRequest from "./Reserve/ReserveRequest";

export default class RequestCreate extends React.Component{
    constructor(props){
        super(props);

        /*Init state*/
        this.state={
            requestType: "",
        }
    }

    /*CONSTANTS*/
    /*TODO fix this hardcode*/
    requestTypeOptions = [
        {label: "Vacation", value: "vacation"},
        {label: "Support", value: "support"},
        {label: "Reserve", value: "reserve"}
        ]


    /*HANDLERS*/
    commonOnChangeHandler = (value, propName) => {
        this.setState({[propName]: value});
    }


    /*RENDERS*/
    renderRequestContent = () => {
        let result = null;

        if(this.state.requestType === "vacation"){
            result = <VacationRequest/>;
        }

        if(this.state.requestType === "support"){
            result = <SupportRequest/>
        }

        if(this.state.requestType === "reserve"){
            result = <ReserveRequest/>
        }

        return result;
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

                {/*render specific request component*/}
                {this.renderRequestContent()}

            </div>
        );
    }

}