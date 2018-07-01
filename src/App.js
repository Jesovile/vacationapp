import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import EmployeeCard from "./components/EmployeeCard/EmployeeCard";
import "./style/flexbox.css";

import 'primereact/resources/themes/omega/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import VacationRequest from "./components/Vacation/VacationRequest";
import NavPanel from "./components/Navigation/NavPanel";
import {Switch, Route} from "react-router-dom";

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
                  <Route exact path='/' component={EmployeeCard}/>
                  <Route path='/vacationreq' component={VacationRequest}/>
              </Switch>
          </div>
      );
  }
}

export default App;
