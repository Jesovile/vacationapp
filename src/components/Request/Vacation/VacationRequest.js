import * as React from "react";
import {Calendar} from "primereact/components/calendar/Calendar";
import {InputTextarea} from 'primereact/components/inputtextarea/InputTextarea';
import {Dropdown} from 'primereact/components/dropdown/Dropdown';
import CommonRequest from "../../../utils/CommonRequest";


export default class VacationRequest extends React.Component {
    constructor(props) {
        super(props);

        /*Init state*/
        this.state = {
            dateFrom: null,
            dateTo: null,
            reason: "",
            requesterComment: ""
        }
    }

    /*TODO fix hardcode state*/
    reasonArray = [
        {label: 'Planned', value: 'Planned'},
        {label: 'Wedding', value: 'Wedding'},
        {label: 'Funeral', value: 'Funeral'},
        {label: 'Custom', value: 'Custom'}
    ];

    commonOnChangeHandler = (value, propName) => this.setState({[propName]: value});

    render(){
        return(
            <div>
                <h2>Vacation Request</h2>

                <div className={'flex_container row'}>
                    <label className={'Label'} htmlFor={'dateFrom'}>Date From</label>
                    <Calendar
                        className={'Content'}
                        id={"dateFrom"}
                        dateFormat={'dd/mm/yy'}
                        value={this.state.dateFrom}
                        onChange = {(event) => this.commonOnChangeHandler(event.value, "dateFrom")}
                    />
                </div>

                <div className={'flex_container row'}>
                    <label className={'Label'} htmlFor={'dateTo'}>Date To</label>
                    <Calendar
                        className={'Content'}
                        id={"dateTo"}
                        dateFormat={'dd/mm/yy'}
                        value={this.state.dateTo}
                        onChange = {(event) => this.commonOnChangeHandler(event.value, "dateTo")}
                    />
                </div>

                <div className={'flex_container row'}>
                    <label className={'Label'} htmlFor={"reason"}>Reason</label>
                    <Dropdown
                        className={'Content'}
                        id={'reason'}
                        value={this.state.reason}
                        onChange={(event) => this.commonOnChangeHandler(event.value, "reason")}
                        options={this.reasonArray}
                    />
                </div>

                <div className={'flex_container row'}>
                    <label className={'Label'} htmlFor={"requesterComment"}>Comment</label>
                    <InputTextarea
                        className={'Content'}
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
                <button onClick={() => this.props.dispatchRequest(new CommonRequest(null, "vacation", "Eugene Jesovile", "New", this.state))}>Create Request</button>

            </div>
        );
    }
}