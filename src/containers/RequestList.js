import * as React from "react";
import {connect} from "react-redux";
import {requestDeleteActionProducer} from "../actions/RequestActions";
import ModalContentView from "../components/Request/Review/ModalContentView";

export class RequestList extends React.Component{
    constructor(props){
        super(props);
        /*Init state*/
        this.state = {showModal: false};
    }

    showModal = (content) => {
        this.setState({showModal: true, modalContent: content});
    }

    closeModal = () => {
        this.setState({showModal:false, modalContent: null});
    }


    renderRequestList = () => {
        if(this.props.requests.length!=0) {
            return (
                this.props.requests.map((item, index) => (
                    <div>
                        <div key={index} index={index} onClick={() => this.showModal(item.content)}>
                            <label>{item.type}</label>
                            <label>{item.requester}</label>
                            <label>{item.status}</label>
                        </div>
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

                <ModalContentView closeModal={this.closeModal} show={this.state.showModal} content={this.state.modalContent}/>

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