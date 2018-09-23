import * as React from "react";
import {Dropdown} from 'primereact/components/dropdown/Dropdown';
import {Calendar} from "primereact/components/calendar/Calendar";
import {InputTextarea} from 'primereact/components/inputtextarea/InputTextarea';
import {InputText} from 'primereact/components/inputtext/InputText';
import CommonRequest from "../../../utils/CommonRequest";
import * as Validation from "../../../utils/Validations";
import ModalWarning from "../Review/ModalWarning";
import ModalSuccess from "../Review/ModalSuccess";
import * as ModalType from "../../../utils/types/ModalDialogTypes";
import * as RequestType from "../../../utils/types/RequestTypes";

export default class SupportRequest extends React.Component{
    constructor(props) {
        super(props);

        /*Init state*/
        this.state = this.initState;
    }

    /*CONSTANTS*/
    initState = {
        requestedItemType: "",
        requestedItem: "",
        urgency: "",
        reason: "",
        requesterComment: "",
        showWarning: false,
        showSuccess: false

    }
    /*TODO fix with dictionary*/
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
        if(this.state.urgency === "toDate"){
            /*TODO implement it as stateless inner component*/
            result =
                <div className={'flex_container row'}>
                    <label className={'Label'} htmlFor={'dateTo'}>Date To</label>
                    <Calendar
                        className={'Content'}
                        id={"dateTo"}
                        dateFormat={'dd/mm/yy'}
                        value={this.state.dateTo}
                        onChange={(event) => this.commonOnChangeHandler(event.value, "dateTo")}
                    />
                </div>
        }
        return result;
    }

    closeModal = (type) => {
        switch(type){
            case ModalType.WARNING:
                this.setState({showWarning: false});
                break;
            case ModalType.SUCCESS:
                this.setState({showSuccess: false});
                break;
            default: console.error("Undefined modal type");
        }
    }


    /*HANDLERS*/
    commonOnChangeHandler = (value, propName) => {
        this.setState({[propName]: value});
    }

    createRequestButtonHandler = () => {
        /*content for validation*/
        let content = {
            requestedItemType: this.state.requestedItemType,
            requestedItem: this.state.requestedItem,
            urgency: this.state.urgency,
            reason: this.state.reason,
            requesterComment: this.state.requesterComment
        }
        if(this.state.urgency === "toDate"){content.dateTo = this.state.dateTo}

        /*validate content and show success or warning modal dialog*/
        if(Validation.validateAllFields(content)) {
            /*TODO refactor requester and status in next sprints*/
            this.props.dispatchRequest(new CommonRequest(null, RequestType.SUPPORT, "Eugene Jesovile", "New", content));
            this.setState({...this.initState, showSuccess: true});
        } else {
            this.setState({showWarning: true});
        }
    }


    /*RENDERS*/
    render(){
        return(
            <div>
                <h2>Support Request</h2>

                <div className={'flex_container row'}>
                    <label className={'Label'} htmlFor={"requestedItemType"}>Equipment type</label>
                    <Dropdown
                        className={'Content'}
                        id={'requestedItemType'}
                        value={this.state.requestedItemType}
                        onChange={(event) => this.commonOnChangeHandler(event.value, "requestedItemType")}
                        options={this.requestedItemTypes}
                    />
                </div>

                <div className={'flex_container row'}>
                    <label className={'Label'} htmlFor={"requestedItem"}>What do you need?</label>
                    <InputText
                        className={'Content'}
                        id="requestedItem"
                        type="text"
                        size="30"
                        value={this.state.requestedItem}
                        onChange={(event) => this.commonOnChangeHandler(event.target.value, "requestedItem")}
                    />
                </div>

                <div className={'flex_container row'}>
                    <label className={'Label'} htmlFor={"reason"}>Why do you need?</label>
                    <InputText
                        className={'Content'}
                        id="reason"
                        type="text"
                        size="30"
                        value={this.state.reason}
                        onChange={(event) => this.commonOnChangeHandler(event.target.value, "reason")}
                    />
                </div>

                <div className={'flex_container row'}>
                    <label className={'Label'} htmlFor={"urgency"}>How fast</label>
                    <Dropdown
                        className={'Content'}
                        id={'urgency'}
                        value={this.state.urgency}
                        onChange={(event) => this.commonOnChangeHandler(event.value, "urgency")}
                        options={this.urgencyTypes}
                    />
                </div>

                {/*render date input if urgency is toDate*/}
                {this.showToDateInput()}

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

                {/*Modal dialogs*/}
                <ModalWarning
                    show={this.state.showWarning}
                    message={"Please, fill in all the fields on the form"}
                    closeModal={() => {this.closeModal(ModalType.WARNING)}}
                />
                <ModalSuccess
                    show={this.state.showSuccess}
                    message={"Request is created successfully"}
                    closeModal={() => {this.closeModal(ModalType.SUCCESS)}}
                />

                <button onClick={this.createRequestButtonHandler}>Create Request</button>

            </div>
        );
    }

}