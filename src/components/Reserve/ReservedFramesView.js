import * as React from "react";
import ReserveAssetReservedFrame from "./ReserveAssetReservedFrame";


export default class ReservedFramesView extends React.Component{
    constructor(props){
        super(props);

        /*Init state*/
        /*TODO fix hardcode during reserve calendar implementation*/
        this.state = {
            reserveDate: new Date(), //date to reserve place
            startHour: 8, //hour workday starts from
            framesNumber: 12 //number of frames in one workday
        }
    }


    /*UTILS*/
    /*TODO export it*/
    formatPartOfDate =(part) => {
        if(part < 10) {
            return "0" + part;
        } else {
            return part;
        }
    }


    /*RENDERS*/
    /*TODO refactor it with reserve implementation*/
    renderReserveButton = (frame) => {
        if(frame){
            return(
                <button onClick={() => alert("Fuctionality is in progress")}>reserve</button>
            );
        } else return null;
    }

    /*TODO refactor it with good implementation*/
    renderTimeFrames = () => {
        let currentTimeStamp = this.state.reserveDate;
        currentTimeStamp.setHours(this.state.startHour,0);

        let currentTimes =[];
        for(let i=0; i<this.props.reservedFrames.length; i++){
            if(i==0){
                currentTimes[i] = currentTimeStamp;
            } else {
                currentTimes[i] = new Date(currentTimes[i-1].getTime() + 60*60000); //add one hour to previous time
            }
        }

        return(
            currentTimes.map((item, index) => (
                <div className={'flex_container row'} key={index}>
                    <div className={'Label reserve'}>{this.formatPartOfDate(item.getHours()) + ":" + this.formatPartOfDate(item.getMinutes())}</div>
                    <ReserveAssetReservedFrame reservedFrame={this.props.reservedFrames[index]}/>
                    {this.renderReserveButton(this.props.reservedFrames[index])}
                </div>
            ))
        );
    }

    render(){
        /*TODO refactor this stub*/
        let currentDate = new Date();

        return(
            <div style={{width:'100%'}}>
                <div className={'flex_container row'}>
                    <div className={'Label reserve'}>Date</div>
                    <div className={'Content review'}>{this.formatPartOfDate(currentDate.getDay()) + "." + this.formatPartOfDate(currentDate.getMonth()) + "." + this.formatPartOfDate(currentDate.getFullYear())}</div>
                </div>
                <div>
                    {this.renderTimeFrames()}
                </div>
            </div>
        );
    }
}