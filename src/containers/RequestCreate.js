import * as React from "react";
import {Dropdown} from 'primereact/components/dropdown/Dropdown';
import VacationRequest from "../components/Request/Vacation/VacationRequest";
import SupportRequest from "../components/Request/Support/SupportRequest";
import {connect} from "react-redux";
import {requestActionProducer, requestAddActionProducer} from "../actions/RequestActions";
import * as RequestType from "../utils/types/RequestTypes";

export class RequestCreate extends React.Component{
    constructor(props){
        super(props);

        /*Init state*/
        this.state={
            requestType: "",
        }
    }

    /*CONSTANTS*/
    /*TODO fix this hardcode with dictionaries*/
    requestTypeOptions = [
        {label: "Vacation", value: RequestType.VACATION},
        {label: "Support", value: RequestType.SUPPORT}
    ]


    /*HANDLERS*/
    commonOnChangeHandler = (value, propName) => {
        this.setState({[propName]: value});
    }


    /*RENDERS*/
    /*TODO refactor with switch case*/
    renderRequestContent = () => {
        let result = null;

        if(this.state.requestType === RequestType.VACATION){
            result = <VacationRequest dispatchRequest={this.props.dispatchRequest}/>;
        }

        if(this.state.requestType === RequestType.SUPPORT){
            result = <SupportRequest dispatchRequest={this.props.dispatchRequest}/>
        }

        return result;
    }

    render(){
        return(
            <div>
                <h2>Request</h2>
                <hr/>

                <div className={'flex_container row'}>
                    <div className={'Label'}>Request type</div>
                    <Dropdown
                        className={'Content'}
                        value={this.state.requestType}
                        onChange={(event) => this.commonOnChangeHandler(event.value, "requestType")}
                        options={this.requestTypeOptions}
                    />
                </div>

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