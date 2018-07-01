import * as React from "react";
import {Link} from "react-router-dom";

export default class NavPanel extends React.Component{
    constructor(props){
        super(props);

        /*init state*/
        this.state = ({navItem: null})
    }

    render(){
        return(
            <div >
                <h2>Navigation</h2>
                <ul>
                    <li><Link to='/'>My card</Link></li>
                    <li><Link to='/request'>Create request</Link></li>
                </ul>
            </div>
        );
    }
}