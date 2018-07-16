import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import EmployeeCard from "./components/EmployeeCard/EmployeeCard";
import "./style/flexbox.css";

import 'primereact/resources/themes/omega/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import NavPanel from "./components/Navigation/NavPanel";
import {Switch, Route} from "react-router-dom";
import RequestCreate from "./containers/RequestCreate";
import RequestList from "./containers/RequestList";
import ReserveRequest from "./components/Reserve/ReserveRequest";

class App extends Component {
  render() {
      return (
          <div>
              {/*header*/}
              <header className="App-header">
                  <img src={logo} className="App-logo" alt="logo"/>
                  <h1 className="App-title">Welcome to React</h1>
              </header>

              {/*navigation*/}
              <NavPanel/>

              {/*content*/}
              <Switch>
                  <Route exact path='/' render={() => <EmployeeCard/>}/>
                  <Route path={'/reserve'} component={ReserveRequest}/>
                  <Route path='/request' component={RequestCreate}/>
                  <Route path={'/requestList'} component={RequestList}/>
              </Switch>
          </div>
      );
  }
}

export default App;
