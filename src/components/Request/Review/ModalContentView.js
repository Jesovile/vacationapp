import * as React from "react";

export default class ModalContentView extends React.Component{

    /*TODO fix it with css-classes*/
    visible = {
        position: 'fixed',
        background: 'gray',
        width: '80%',
        height: 'auto',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%,-50%)',
        display: 'block'
    }

    notVisible = {
        position: 'fixed',
        background: 'white',
        width: '80%',
        height: 'auto',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%,-50%)',
        display: 'none'
    }


    renderContent = () => {
        if(this.props.content) {
            let content = this.props.content;
            let contentArray = [];
            for (let key in content) {
                contentArray[contentArray.length] = {propName: key, propValue: content[key]};
            }
            return (
                /*First letter of propName to UpperCase. PropValue toString() for correct dates view */
                contentArray.map((item, index) => (
                    <div key={index}>
                        <label>{item.propName.charAt(0).toUpperCase() + item.propName.slice(1)}</label>
                        <label>{item.propValue.toString()}</label>
                    </div>
                ))
            );
        } else return null;
    }

    render(){
        return(
            <div style={this.props.show ? this.visible : this.notVisible}>
                <h2>Modal</h2>
                    {this.renderContent()}
                <button onClick={this.props.closeModal}>Close</button>
            </div>
        );
    }
}