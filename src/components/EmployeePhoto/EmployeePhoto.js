import * as React from "react";
import ava from "./ava.jpg";

export default class EmployeePhoto extends React.Component{

    render(){
        /*todo fix style*/
        return(
            <div className={'flex-container'} style={{backgroundColor: 'black'}}>
                <img src={ava} alt={"Employee pic"} height={"100%"} width={"100%"}></img>
            </div>
        );
    }
}