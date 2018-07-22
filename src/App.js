import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'primereact/resources/themes/omega/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import {Switch, Route} from "react-router-dom";
import NavPanel from "./components/Navigation/NavPanel";
import EmployeeCard from "./components/EmployeeCard/EmployeeCard";
import RequestCreate from "./containers/RequestCreate";
import RequestList from "./containers/RequestList";
import ReserveRequest from "./containers/ReserveRequest";

class App extends Component {
    render() {
        return (
            <div>
                {/*header*/}
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Employee Requests</h1>
                </header>

                <div className={'flex_container'}>
                    {/*navigation*/}
                    <NavPanel/>

                    {/*content*/}
                    <div className={'content_container'}>
                        <Switch>
                            <Route exact path='/' render={() => <EmployeeCard/>}/>
                            <Route path={'/reserve'} component={ReserveRequest}/>
                            <Route path='/request' component={RequestCreate}/>
                            <Route path={'/requestList'} component={RequestList}/>
                        </Switch>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
