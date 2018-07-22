import * as React from "react";

export default class ModalContentView extends React.Component{

    /*TODO fix it with css-classes*/
    visible = {
        position: 'fixed',
        backgroundColor: '#f1f1f1',
        width: '60%',
        height: 'auto',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%,-50%)',
        padding: '1%',
        border: '2px solid black',
        borderRadius: '5px',
        display: 'block'
    }

    notVisible = {
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
                /*TODO add correct view for different types of content*/
                contentArray.map((item, index) => (
                    <div key={index} className={'flex_container row'}>
                        <div className={'Label'}>{item.propName.charAt(0).toUpperCase() + item.propName.slice(1)}</div>
                        <div className={'Content review'}>{item.propValue.toString()}</div>
                    </div>
                ))
            );
        } else return null;
    }

    render(){
        return(
            <div style={this.props.show ? this.visible : this.notVisible}>
                <h2>Request Details</h2>
                <hr/>

                {this.renderContent()}

                <button onClick={this.props.closeModal}>Close</button>
            </div>
        );
    }
}