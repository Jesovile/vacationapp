import * as React from "react";
import {connect} from "react-redux";
import {requestDeleteActionProducer} from "../actions/RequestActions";

export class RequestList extends React.Component{

    renderRequestList = () => {
        if(this.props.requests.length!=0) {
            return (
                this.props.requests.map((item, index) => (
                    <div key={index} index={index}>
                        <label>{item.type}</label>
                        <label>{item.requester}</label>
                        <label>{item.status}</label>
                        <button onClick={() => this.props.dispatchDelete(index)}>Cancel</button>
                    </div>
                ))
            );
        } else {
            return <div>{"No request available"}</div>
        }
    }

    render(){
        return(
            <div>
                <h2>My Requests</h2>

                {this.renderRequestList()}

            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        requests: state.requests
    }
}

function mapDispatchToProps(dispatch){
    return {
        dispatchDelete: (index) => dispatch(requestDeleteActionProducer(index))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RequestList);