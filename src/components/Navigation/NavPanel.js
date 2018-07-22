import * as React from "react";
import {Link} from "react-router-dom";
import "../../style/NavPanel.css";

export default class NavPanel extends React.Component{
    constructor(props){
        super(props);

        /*init state*/
        this.state = ({navItem: null})
    }

    render(){
        return(
            <div className={'Navigation'}>
                <h2>Navigation</h2>
                <ul>
                    <li><Link to='/'>My card</Link></li>
                    <li><Link to='/reserve'>Reserve place</Link></li>
                    <li><Link to='/request'>Create request</Link></li>
                    <li><Link to='/requestList'>My requests</Link></li>
                </ul>
            </div>
        );
    }
}