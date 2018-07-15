import * as React from "react";
import {Dropdown} from 'primereact/components/dropdown/Dropdown';
import {Calendar} from "primereact/components/calendar/Calendar";
import {InputTextarea} from 'primereact/components/inputtextarea/InputTextarea';
import {InputText} from 'primereact/components/inputtext/InputText';
import CommonRequest from "../../../utils/CommonRequest";

export default class SupportRequest extends React.Component{
    constructor(props) {
        super(props);

        /*TODO fix hardcode state*/
        /*Init state*/
        this.state = {
            status: "New",
            requestedItemType: "",
            requestedItem: "",
            urgency: "",
            dateTo: null,
            reason: "",
            requesterComment: ""
        }
    }

    /*CONSTANTS*/
    /*TODO fix hardcode*/
    requestedItemTypes = [
        {label: 'Hardware', value: 'hardware'},
        {label: 'Software', value: 'software'},
        {label: 'Office', value: 'office'}
    ]

    urgencyTypes = [
        {label: 'Immediatelly', value: 'immediatelly'},
        {label: 'Next week', value: 'nextWeek'},
        {label: 'Next month', value: 'nextMonth'},
        {label: 'To date', value: 'toDate'},
        {label: 'As possible', value: 'asPossible'}
    ]


    /*UTILS*/
    showToDateInput = () => {
        let result = null;
        if(this.state.urgency == "toDate"){
            /*TODO implement it as stateless inner component*/
            result =
                <div>
                    <label htmlFor={'dateTo'}>Date To</label>
                    <Calendar
                        id={"dateTo"}
                        dateFormat={'dd/mm/yy'}
                        value={this.state.dateTo}
                        onChange={(event) => this.commonOnChangeHandler(event.value, "dateTo")}
                    />
                </div>
        }
        return result;
    }


    /*HANDLERS*/
    commonOnChangeHandler = (value, propName) => {
        this.setState({[propName]: value});
    }


    /*RENDERS*/
    render(){
        return(
            <div>
                <h2>Support Request</h2>

                <div>
                    <label>Status</label>
                    <label>{this.state.status}</label>
                </div>

                <div>
                    <label htmlFor={"requestedItemType"}>Equipment type</label>
                    <Dropdown
                        id={'requestedItemType'}
                        value={this.state.requestedItemType}
                        onChange={(event) => this.commonOnChangeHandler(event.value, "requestedItemType")}
                        options={this.requestedItemTypes}
                    />
                </div>

                <div>
                    <label htmlFor={"requestedItem"}>What do you need?</label>
                    <InputText
                        id="requestedItem"
                        type="text"
                        size="30"
                        value={this.state.requestedItem}
                        onChange={(event) => this.commonOnChangeHandler(event.target.value, "requestedItem")}
                    />
                </div>

                <div>
                    <label htmlFor={"reason"}>Why do you need?</label>
                    <InputText
                        id="reason"
                        type="text"
                        size="30"
                        value={this.state.reason}
                        onChange={(event) => this.commonOnChangeHandler(event.target.value, "reason")}
                    />
                </div>

                <div>
                    <label htmlFor={"urgency"}>How fast</label>
                    <Dropdown
                        id={'urgency'}
                        value={this.state.urgency}
                        onChange={(event) => this.commonOnChangeHandler(event.value, "urgency")}
                        options={this.urgencyTypes}
                    />
                </div>

                {/*render date input if urgency is toDate*/}
                {this.showToDateInput()}

                <div>
                    <label htmlFor={"requesterComment"}>Comment</label>
                    <InputTextarea
                        id={"requesterComment"}
                        value={this.state.requesterComment}
                        onChange={(event) => this.commonOnChangeHandler(event.target.value, "requesterComment")}
                        maxLength={128}
                        autoResize={true}
                        rows={3}
                        cols={30}
                    />
                </div>

                {/*TODO fix this hardcode*/}
                <button onClick={() => this.props.dispatchRequest(new CommonRequest(null, "support", "Eugene Jesovile", "New", this.state))}>Create Request</button>


            </div>
        );
    }

}