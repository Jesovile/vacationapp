import * as React from "react";

export default class EmployeeInfo extends React.Component{
    constructor(props){
        super(props);

        /*Init state**/
        this.state = {
            fullname: "Eugene Jesovile",
            position: "Software Architect",
            department: "R&D"
        };
    }

    render(){
        /*todo fix style*/
        /*REFACTOR maybe, it's <ul>\<li> ???*/
        return(
            <div>
               <div>
                   <label>Full Name</label>
                   <label>{this.state.fullname}</label>
               </div>
                <div>
                    <label>Full Name</label>
                    <label>{this.state.fullname}</label>
                </div>
                <div>
                    <label>Full Name</label>
                    <label>{this.state.fullname}</label>
                </div>
            </div>
        );
    }

}