import logo from './logo.svg';
import { Dialog } from 'primereact/dialog';
import { Accordion, AccordionTab } from 'primereact/accordion';
import { InputText } from 'primereact/inputtext';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import CreateComponent from "./components/create.component";
import ListComponent from "./components/list.component";
import HomeComponent from "./components/home.component";


import Tutorial from "./components/home.component";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import React, { useState } from 'react';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ColumnGroup } from 'primereact/columngroup';
import { Row } from 'primereact/row';

import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

import './App.css';



export default function App() {
  return (
    <Router>
      <div>

        <div class="navbar-top">
          <div class="openbtn" >
            <i class="fa fa-bars" aria-hidden="true"></i>
          </div>
          <div class="logo-wrapper">
            <Link to="/"><img src="logo.png" /></Link>
          </div>
          <div class="title-wrapper">
            <h3>COOPSERVICE COMMUNITY</h3>
          </div>
          <ul class="user-menu">
            <li>Benvenuto</li>
            <li>
              <a>
                <span class="profile-name"
                >Username</span
                >
                <i class="material-icons ui-icon-keyboard-arrow-down"></i>
              </a>
            </li>

            <li>Logout</li>
          </ul>

        </div>

        <div class="sidebar open">
          <ul>
            <li>
              <Link to="/"><i class="fa fa-chevron-right"></i>Home</Link>
            </li>
            <li>
              <Link to="/list"><i class="fa fa-chevron-right"></i>List</Link>
            </li>
            <li>
              <Link to="/create"><i class="fa fa-chevron-right"></i>Create</Link>
            </li>
          </ul>

        </div>
        <div id="main" class="close">


          <Switch>
            <Route path="/list">
              <ListComponent />
            </Route>
            <Route path="/create">
              <CreateComponent />
            </Route>
            <Route path="/">
              <HomeComponent />
            </Route>
          </Switch>
        </div>
      </div>
    </Router >
  );
}

