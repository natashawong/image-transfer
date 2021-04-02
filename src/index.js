import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import './index.css';
import Page1 from './App';
import Page2 from "./SurveyPage";
import reportWebVitals from './reportWebVitals';

const rootElement = document.getElementById("root");
    ReactDOM.render(
      <BrowserRouter>
       <Switch>
        <Route exact path="/" component={Page1} />
        <Route path="/page2" component={Page2} />
      </Switch>
      </BrowserRouter>,
      rootElement
    );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
