import * as React from "react";
import EmployeeInfo from "../EmployeeInfo/EmployeeInfo";


export default class EmployeeCard extends React.Component{

    render(){
        return(
            <div>
                <h2>My card</h2>
                <hr/>
                <EmployeeInfo/>
            </div>
        );
    }
}