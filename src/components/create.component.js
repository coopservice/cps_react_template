import React, { Component, useState } from "react";
import { InputText } from 'primereact/inputtext';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
} from "react-router-dom";
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import { Calendar } from 'primereact/calendar';
import { Checkbox } from 'primereact/checkbox';

import { Sidebar } from 'primereact/sidebar';
import { Card } from 'primereact/card';


function CreateComponent() {
    let match = useRouteMatch();

    const [selectedCity1, setSelectedCity1] = useState(null);
    const [selectedCity2, setSelectedCity2] = useState(null);
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [selectedGroupedCity, setSelectedGroupedCity] = useState(null);

    const [checked, setChecked] = useState(false);

    const onCityChange = (e) => {
        setSelectedCity1(e.value);
    }

    const onCityChange2 = (e) => {
        setSelectedCity2(e.value);
    }

    const onCountryChange = (e) => {
        setSelectedCountry(e.value);
    }

    const onGroupedCityChange = (e) => {
        setSelectedGroupedCity(e.value);
    }


    const cities = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];
    const countries = [
        { name: 'Australia', code: 'AU' },
        { name: 'Brazil', code: 'BR' },
        { name: 'China', code: 'CN' },
        { name: 'Egypt', code: 'EG' },
        { name: 'France', code: 'FR' },
        { name: 'Germany', code: 'DE' },
        { name: 'India', code: 'IN' },
        { name: 'Japan', code: 'JP' },
        { name: 'Spain', code: 'ES' },
        { name: 'United States', code: 'US' }
    ];


    return (
        <div>

            <div class="top-wrapper">
                <div class="p-grid">
                    <div class="p-col-6">
                        <h1>Aggiungi</h1>

                    </div>
                    <div class="p-col-6">
                        <Button label="Danger" className="p-button-secondary pull-right" />
                        <Button label="Danger" className="p-button-primary pull-right" />
                    </div>
                </div>
            </div>


            <div class="wrapper">



                <div class="wrapper">
                    <div class="p-grid">
                        <div class="p-col-12">

                            <Card>

                                <div class="p-grid form-group clearfix">
                                    <div class="p-col-3">label</div>
                                    <div class="p-col-9">  <InputText /></div>

                                    <div className="clearfix"></div>
                                </div>


                                <div class="p-grid form-group clearfix">
                                    <div class="p-col-3">label</div>
                                    <div class="p-col-9">
                                        <Dropdown value={selectedCity1} options={cities} onChange={onCityChange} optionLabel="name" placeholder="Select a City" />
                                    </div>

                                    <div className="clearfix"></div>
                                </div>

                                <div class="p-grid form-group clearfix">
                                    <div class="p-col-3">label</div>
                                    <div class="p-col-9">
                                        <Calendar></Calendar>
                                    </div>

                                    <div className="clearfix"></div>
                                </div>

                                <div class="p-grid form-group clearfix">
                                    <div class="p-col-3">label</div>
                                    <div class="p-col-9">
                                        <Checkbox onChange={e => setChecked(e.checked)} checked={checked}></Checkbox>
                                    </div>

                                    <div className="clearfix"></div>
                                </div>





                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default CreateComponent;