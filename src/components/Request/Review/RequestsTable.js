import * as React from "react";
import {DataTable} from 'primereact/components/datatable/DataTable';
import {Column} from "primereact/components/column/Column";

export default class RequestTable extends React.Component{


    /*CONSTANTS*/
    requests = [
        {requestType: "vacation", createDate: new Date(), status: "rending", deadlineDate: new Date(2018, 7, 20)},
        {requestType: "support", createDate: new Date(), status: "resolved", deadlineDate: new Date(2018, 7, 20)},
        {requestType: "reserve", createDate: new Date(), status: "rejected", deadlineDate: new Date(2018, 7, 20)}
    ]

    /*RENDERS*/
    renderTableRows = () => {

    }

    render(){
        <div>
            <h2>All Requests</h2>

            <DataTable value={this.requests}>
                <Column field="vin" header="Vin" />
                <Column field="year" header="Year" />
                <Column field="brand" header="Brand" />
                <Column field="color" header="Color" />
            </DataTable>

            {/*dynamic requests rows render*/}
            {/*{this.renderTableRows()}*/}

        </div>
    }

}