import * as React from "react";
import {Dropdown} from 'primereact/components/dropdown/Dropdown';
import VacationRequest from "../components/Request/Vacation/VacationRequest";
import SupportRequest from "../components/Request/Support/SupportRequest";
import ReserveRequest from "../components/Reserve/ReserveRequest";
import {connect} from "react-redux";
import {requestActionProducer, requestAddActionProducer} from "../actions/RequestActions";

export class RequestCreate extends React.Component{
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
        {label: "Support", value: "support"}
    ]


    /*HANDLERS*/
    commonOnChangeHandler = (value, propName) => {
        this.setState({[propName]: value});
    }


    /*RENDERS*/
    /*TODO refactor with switch case*/
    renderRequestContent = () => {
        let result = null;

        if(this.state.requestType === "vacation"){
            result = <VacationRequest dispatchRequest={this.props.dispatchRequest}/>;
        }

        if(this.state.requestType === "support"){
            result = <SupportRequest dispatchRequest={this.props.dispatchRequest}/>
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

function mapDispatchToProps(dispatch){
    return {
        dispatchRequest: (request) => dispatch(requestAddActionProducer(request))
    }
}

export default connect(null, mapDispatchToProps)(RequestCreate)