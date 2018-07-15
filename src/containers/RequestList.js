import * as React from "react";
import {connect} from "react-redux";

export class RequestList extends React.Component{

    renderRequestList = () => {
        if(this.props.requests.length!=0) {
            return (
                this.props.requests.map((item, index) => (
                    <div key={index}>
                        <label>{item.type}</label>
                        <label>{item.requester}</label>
                        <label>{item.status}</label>
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

export default connect(mapStateToProps)(RequestList);