import * as React from "react";
import {Calendar} from "primereact/components/calendar/Calendar";
import {InputTextarea} from 'primereact/components/inputtextarea/InputTextarea';
import {Dropdown} from 'primereact/components/dropdown/Dropdown';
import CommonRequest from "../../../utils/CommonRequest";
import * as Validation from "../../../utils/Validations";
import ModalWarning from "../Review/ModalWarning";
import ModalSuccess from "../Review/ModalSuccess";
import * as ModalType from "../../../utils/types/ModalDialogTypes";
import * as RequestType from "../../../utils/types/RequestTypes";


export default class VacationRequest extends React.Component {
    constructor(props) {
        super(props);

        /*Init state*/
        this.state = this.initState;
    }


    /*CONSTANTS*/
    /*Initial state*/
    initState = {
        dateFrom: null,
        dateTo: null,
        reason: "",
        requesterComment: "",
        showWarning: false,
        showSuccess: false
    }

    /*TODO fix with dictionary*/
    reasonArray = [
        {label: 'Planned', value: 'Planned'},
        {label: 'Wedding', value: 'Wedding'},
        {label: 'Funeral', value: 'Funeral'},
        {label: 'Custom', value: 'Custom'}
    ];


    /*UTILS*/
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
    commonOnChangeHandler = (value, propName) => this.setState({[propName]: value});

    createRequestButtonHandler = () => {
        /*content for validation*/
        let content = {
            dateFrom: this.state.dateFrom,
            dateTo: this.state.dateTo,
            reason: this.state.reason,
            requesterComment: this.state.requesterComment
        }

        /*validate content and show success or warning modal dialog*/
        if(Validation.validateAllFields(content)) {
            /*TODO refactor requester and status in next sprints*/
            this.props.dispatchRequest(new CommonRequest(null, RequestType.VACATION, "Eugene Jesovile", "New", content));
            this.setState({...this.initState, showSuccess: true});
        } else {
            this.setState({showWarning: true});
        }
    }


    /*RENDERS*/
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