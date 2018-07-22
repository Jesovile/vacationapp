import * as React from "react";
import {Calendar} from "primereact/components/calendar/Calendar";
import {InputTextarea} from 'primereact/components/inputtextarea/InputTextarea';
import {Dropdown} from 'primereact/components/dropdown/Dropdown';
import CommonRequest from "../../../utils/CommonRequest";
import * as Validation from "../../../utils/Validations";
import ModalWarning from "../Review/ModalWarning";
import ModalSuccess from "../Review/ModalSuccess";


export default class VacationRequest extends React.Component {
    constructor(props) {
        super(props);

        /*Init state*/
        this.state = this.initState;
    }

    /*Initial state*/
    initState = {
        dateFrom: null,
        dateTo: null,
        reason: "",
        requesterComment: "",
        showWarning: false,
        showSuccess: false
    }



    /*TODO fix hardcode state*/
    reasonArray = [
        {label: 'Planned', value: 'Planned'},
        {label: 'Wedding', value: 'Wedding'},
        {label: 'Funeral', value: 'Funeral'},
        {label: 'Custom', value: 'Custom'}
    ];

    commonOnChangeHandler = (value, propName) => this.setState({[propName]: value});

    /*TODO refactor with type implementation*/
    closeModal = (type) => {
        switch(type){
            case "warning":
                this.setState({showWarning: false});
                break;
            case "success":
                this.setState({showSuccess: false});
                break;
        }
    }

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
            this.props.dispatchRequest(new CommonRequest(null, "vacation", "Eugene Jesovile", "New", content));
            this.setState({...this.initState, showSuccess: true});
        } else {
            this.setState({showWarning: true});
        }
    }

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
                    closeModal={() => {this.closeModal("warning")}}
                />
                <ModalSuccess
                    show={this.state.showSuccess}
                    message={"Request is created successfully"}
                    closeModal={() => {this.closeModal("success")}}
                />

                <button onClick={this.createRequestButtonHandler}>Create Request</button>

            </div>
        );
    }
}