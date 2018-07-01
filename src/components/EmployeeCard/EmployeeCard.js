import * as React from "react";
import EmployeePhoto from "../EmployeePhoto/EmployeePhoto";
import EmployeeInfo from "../EmployeeInfo/EmployeeInfo";


export default class EmployeeCard extends React.Component{

    render(){
        return(
            <div>
                <h2>My card</h2>
                {/*<EmployeePhoto/>*/}
                <EmployeeInfo/>
            </div>
        );
    }
}