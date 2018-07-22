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
               <div className={'flex_container row'}>
                   <div className={'Label'}>Full Name</div>
                   <div className={'Content review'}>{this.state.fullname}</div>
               </div>
                <div className={'flex_container row'}>
                    <div className={'Label'}>Position</div>
                    <div className={'Content review'}>{this.state.position}</div>
                </div>
                <div className={'flex_container row'}>
                    <div className={'Label'}>Department</div>
                    <div className={'Content review'}>{this.state.department}</div>
                </div>
            </div>
        );
    }

}