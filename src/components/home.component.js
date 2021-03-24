import React, { Component } from "react";
import { InputText } from 'primereact/inputtext';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
} from "react-router-dom";

import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import 'font-awesome/css/font-awesome.min.css';


function HomeComponent() {
    let match = useRouteMatch();


    const sales = [
        'Bamboo Watch', 'Bamboo Watch', 'Bamboo Watch', 'Bamboo Watch', 'Bamboo Watch', 'Bamboo Watch'
    ];


    return (
        <div>


            <div class="top-wrapper">
                <div class="ui-g">
                    <div class="ui-g-6">
                        <h1>Dashboard</h1>

                    </div>
                    <div class="ui-g-6">


                    </div>
                </div>
            </div>



            <div class="wrapper">
                <div class="p-grid">

                    {sales.map((value, index) => {
                        return <div key={index} className="p-col-6">
                            <Card className="menu-item-wrapper">
                                <div class="p-grid">
                                    <div class="p-col-9">
                                        <h3>{value}</h3>
                                    </div>

                                    <div class="p-col-3">
                                        <div class="menu-item-icon">
                                            <i class="fa fa-pencil pull-right"></i>
                                        </div>
                                    </div>
                                </div>
                            </Card></div>
                    })}



                </div>
            </div>
        </div>
    );
}

export default HomeComponent;