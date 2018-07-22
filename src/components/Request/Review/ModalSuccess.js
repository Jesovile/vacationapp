import * as React from "react";

export default class ModalWarning extends React.Component {

    /*TODO fix it with css-classes*/
    visible = {
        position: 'fixed',
        backgroundColor: '#f1f1f1',
        width: '40%',
        height: 'auto',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%,-50%)',
        padding: '1%',
        border: '5px solid green',
        borderRadius: '5px',
        display: 'block'
    }

    notVisible = {
        display: 'none'
    }

    /*TODO add styling for message*/
    renderMessage = (message) => {
        return (
            <div>{message}</div>
        );
    }

    render(){
        return(
            <div style={this.props.show ? this.visible : this.notVisible}>
                <h2>Confirmation</h2>
                <hr/>

                {this.renderMessage(this.props.message)}

                <button onClick={this.props.closeModal}>Close</button>
            </div>
        );
    }
}