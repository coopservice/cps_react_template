import React, { Component, useState, useEffect, useRef } from "react";

import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ColumnGroup } from 'primereact/columngroup';
import { Row } from 'primereact/row';
import { Ripple } from 'primereact/ripple';
import { Dropdown } from 'primereact/dropdown';
import classNames from 'classnames';
import { InputText } from 'primereact/inputtext';
import { OverlayPanel } from 'primereact/overlaypanel';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
  useRouteMatch,
  useParams
} from "react-router-dom";
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

import './../App.css';

function ListComponent() {
  let match = useRouteMatch();

  const [currentPage, setCurrentPage] = useState(1);
  const [pageInputTooltip, setPageInputTooltip] = useState('Press \'Enter\' key to go to this page.');

  const [first1, setFirst1] = useState(0);
  const [rows1, setRows1] = useState(10);
  const [first2, setFirst2] = useState(0);
  const [rows2, setRows2] = useState(10);
  const op = useRef(null);


  const onPageInputKeyDown = (event, options) => {
    if (event.key === 'Enter') {
      const page = parseInt(currentPage);
      if (page < 0 || page > options.totalPages) {
        setPageInputTooltip(`Value must be between 1 and ${options.totalPages}.`);
      }
      else {
        const first = currentPage ? options.rows * (page - 1) : 0;

        setFirst1(first);
        setPageInputTooltip('Press \'Enter\' key to go to this page.');
      }
    }
  }

  const onCustomPage1 = (event) => {
    setFirst1(event.first);
    setRows1(event.rows);
    setCurrentPage(event.page + 1);
  }

  const onCustomPage2 = (event) => {
    setFirst2(event.first);
    setRows2(event.rows);
  }

  const onPageInputChange = (event) => {
    setCurrentPage(event.target.value);
  }

  const sales = [
    { product: 'Bamboo Watch', lastYearSale: 51, thisYearSale: 40, lastYearProfit: 54406, thisYearProfit: 43342 },
    { product: 'Black Watch', lastYearSale: 83, thisYearSale: 9, lastYearProfit: 423132, thisYearProfit: 312122 },
    { product: 'Blue Band', lastYearSale: 38, thisYearSale: 5, lastYearProfit: 12321, thisYearProfit: 8500 },
    { product: 'Blue T-Shirt', lastYearSale: 49, thisYearSale: 22, lastYearProfit: 745232, thisYearProfit: 65323 },
    { product: 'Brown Purse', lastYearSale: 17, thisYearSale: 79, lastYearProfit: 643242, thisYearProfit: 500332 },
    { product: 'Chakra Bracelet', lastYearSale: 52, thisYearSale: 65, lastYearProfit: 421132, thisYearProfit: 150005 },
    { product: 'Galaxy Earrings', lastYearSale: 82, thisYearSale: 12, lastYearProfit: 131211, thisYearProfit: 100214 },
    { product: 'Game Controller', lastYearSale: 44, thisYearSale: 45, lastYearProfit: 66442, thisYearProfit: 53322 },
    { product: 'Bamboo Watch', lastYearSale: 51, thisYearSale: 40, lastYearProfit: 54406, thisYearProfit: 43342 },
    { product: 'Black Watch', lastYearSale: 83, thisYearSale: 9, lastYearProfit: 423132, thisYearProfit: 312122 },
    { product: 'Blue Band', lastYearSale: 38, thisYearSale: 5, lastYearProfit: 12321, thisYearProfit: 8500 },
    { product: 'Blue T-Shirt', lastYearSale: 49, thisYearSale: 22, lastYearProfit: 745232, thisYearProfit: 65323 },
    { product: 'Brown Purse', lastYearSale: 17, thisYearSale: 79, lastYearProfit: 643242, thisYearProfit: 500332 },
    { product: 'Chakra Bracelet', lastYearSale: 52, thisYearSale: 65, lastYearProfit: 421132, thisYearProfit: 150005 },
    { product: 'Galaxy Earrings', lastYearSale: 82, thisYearSale: 12, lastYearProfit: 131211, thisYearProfit: 100214 },
    { product: 'Game Controller', lastYearSale: 44, thisYearSale: 45, lastYearProfit: 66442, thisYearProfit: 53322 },
    { product: 'Gaming Set', lastYearSale: 90, thisYearSale: 56, lastYearProfit: 765442, thisYearProfit: 296232 },
    { product: 'Bamboo Watch', lastYearSale: 51, thisYearSale: 40, lastYearProfit: 54406, thisYearProfit: 43342 },
    { product: 'Black Watch', lastYearSale: 83, thisYearSale: 9, lastYearProfit: 423132, thisYearProfit: 312122 },
    { product: 'Blue Band', lastYearSale: 38, thisYearSale: 5, lastYearProfit: 12321, thisYearProfit: 8500 },
    { product: 'Blue T-Shirt', lastYearSale: 49, thisYearSale: 22, lastYearProfit: 745232, thisYearProfit: 65323 },
    { product: 'Brown Purse', lastYearSale: 17, thisYearSale: 79, lastYearProfit: 643242, thisYearProfit: 500332 },
    { product: 'Chakra Bracelet', lastYearSale: 52, thisYearSale: 65, lastYearProfit: 421132, thisYearProfit: 150005 },
    { product: 'Galaxy Earrings', lastYearSale: 82, thisYearSale: 12, lastYearProfit: 131211, thisYearProfit: 100214 },
    { product: 'Game Controller', lastYearSale: 44, thisYearSale: 45, lastYearProfit: 66442, thisYearProfit: 53322 },
    { product: 'Gaming Set', lastYearSale: 90, thisYearSale: 56, lastYearProfit: 765442, thisYearProfit: 296232 },

    { product: 'Gaming Set', lastYearSale: 90, thisYearSale: 56, lastYearProfit: 765442, thisYearProfit: 296232 },
    { product: 'Gold Phone Case', lastYearSale: 75, thisYearSale: 54, lastYearProfit: 21212, thisYearProfit: 12533 }
  ];


  const lastYearSaleBodyTemplate = (rowData) => {
    return `${rowData.lastYearSale}%`;
  }

  const thisYearSaleBodyTemplate = (rowData) => {
    return `${rowData.thisYearSale}%`;
  }

  const lastYearProfitBodyTemplate = (rowData) => {
    return `${formatCurrency(rowData.lastYearProfit)}`;
  }

  const thisYearProfitBodyTemplate = (rowData) => {
    return `${formatCurrency(rowData.thisYearProfit)}`;
  }

  const formatCurrency = (value) => {
    return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
  }

  const template1 = {
    layout: 'PrevPageLink PageLinks NextPageLink RowsPerPageDropdown CurrentPageReport',
    'PrevPageLink': (options) => {
      return (
        <button type="button" className={options.className} onClick={options.onClick} disabled={options.disabled}>
          <span className="p-p-3">Previous</span>
          <Ripple />
        </button>
      )
    },
    'NextPageLink': (options) => {
      return (
        <button type="button" className={options.className} onClick={options.onClick} disabled={options.disabled}>
          <span className="p-p-3">Next</span>
          <Ripple />
        </button>
      )
    },
    'PageLinks': (options) => {
      if ((options.view.startPage === options.page && options.view.startPage !== 0) || (options.view.endPage === options.page && options.page + 1 !== options.totalPages)) {
        const className = classNames(options.className, { 'p-disabled': true });

        return <span className={className} style={{ userSelect: 'none' }}>...</span>;
      }

      return (
        <button type="button" className={options.className} onClick={options.onClick}>
          {options.page + 1}
          <Ripple />
        </button>
      )
    },
    'RowsPerPageDropdown': (options) => {
      const dropdownOptions = [
        { label: 10, value: 10 },
        { label: 20, value: 20 },
        { label: 50, value: 50 },
        { label: 'All', value: options.totalRecords }
      ];

      return <Dropdown value={options.value} options={dropdownOptions} onChange={options.onChange} appendTo={document.body} />;
    },
    'CurrentPageReport': (options) => {
      return (
        <span className="p-mx-3" style={{ color: 'var(--text-color)', userSelect: 'none' }}>
          Go to <InputText size="2" className="p-ml-1" value={currentPage} tooltip={pageInputTooltip}
            onKeyDown={(e) => onPageInputKeyDown(e, options)} onChange={onPageInputChange} />
        </span>
      )
    }
  }

  const items = [
    'Bamboo Watch', 'Bamboo Watch', 'Bamboo Watch', 'Bamboo Watch', 'Bamboo Watch', 'Bamboo Watch'
  ];

  const lastYearTotal = () => {
    let total = 0;
    for (let sale of sales) {
      total += sale.lastYearProfit;
    }

    return formatCurrency(total);
  }

  const thisYearTotal = () => {
    let total = 0;
    for (let sale of sales) {
      total += sale.thisYearProfit;
    }

    return formatCurrency(total);
  }


  const statusBodyTemplate = (rowData) => {
    return <Button onClick={createUrl} icon="pi pi-eye" label="visualizza" />;
  }

  const history = useHistory();


  const createUrl = () => {
    let path = `create`;
    history.push(path);
  }

  let headerGroup = <ColumnGroup>

    <Row>
      <Column header="Last Year" sortable field="lastYearSale" />
      <Column header="This Year" sortable field="thisYearSale" />
      <Column header="Last Year" sortable field="lastYearProfit" />
      <Column header="This Year" sortable field="thisYearProfit" />
      <Column header="This Year" sortable field="thisYearProfit" />

    </Row>
  </ColumnGroup>;

  let footerGroup = <ColumnGroup>
    <Row>
      <Column footer="Totals:" colSpan={3} footerStyle={{ textAlign: 'right' }} />
      <Column footer={lastYearTotal} />
      <Column footer={thisYearTotal} />
    </Row>
  </ColumnGroup>;

  return (
    <div>

      <OverlayPanel ref={op}>
        {items.map((value, index) => {
          return <div key={index}>
            <div class="p-grid form-group clearfix">
              <div class="p-col-3">{value}</div>
              <div class="p-col-9">  <InputText /></div></div>

          </div>
        })}

        <div class="p-grid">
          <div class="p-col-3">
          </div>
          <div class="p-col-9">

            <div class="p-grid">
              <div class="p-col-6">
                <Button label="Salva" className="p-button-secondary pull-right btn-block" />

              </div>
              <div class="p-col-6">
                <Button label="Annulla" className="p-button-primary pull-right btn-block" />
              </div>
            </div>
          </div>
        </div>
      </OverlayPanel>
      <div class="top-wrapper">
        <div class="p-grid">
          <div class="p-col-6">
            <h1>Lista</h1>

          </div>
          <div class="p-col-6">
            <Button label="Aggiungi" icon="pi pi-plus" className="p-button-secondary pull-right" />
            <Button label="Danger" className="p-button-primary pull-right" />
          </div>
        </div>
      </div>


      <div class="wrapper">

        <div class="p-grid">
          <div class="p-col-12">
            <div class="filter-wrapper clearfix">
              <a class="btn-filter" onClick={(e) => op.current.toggle(e)}>
                <i class="fa fa-sliders" aria-hidden="true"></i> Cerca
                </a>


            </div>
          </div>
        </div>
        <div class="clearfix"></div>

        <div class="p-grid">
          <div class="p-col-12">


            <Card>
              <DataTable value={sales} headerColumnGroup={headerGroup} footerColumnGroup={footerGroup} paginator
                paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
                currentPageReportTemplate="Showing {first} to {last} of {totalRecords}" rows={10} rowsPerPageOptions={[10, 20, 50]}
              >
                <Column field="product" />
                <Column field="lastYearSale" body={lastYearSaleBodyTemplate} />
                <Column field="thisYearSale" body={thisYearSaleBodyTemplate} />
                <Column field="lastYearProfit" body={lastYearProfitBodyTemplate} />
                <Column field="quantity" body={statusBodyTemplate}></Column>
              </DataTable>
            </Card>

          </div>
        </div>
      </div>


    </div>
  );
}

export default ListComponent;