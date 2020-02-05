import React, { Fragment } from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';
import { createGlobalStyle } from 'styled-components';

import TopBar from "./components/TopBar";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        text-decoration: none;
        font-family: 'Arial', sans-serif;
        border: none;
        &:focus {
            outline: none;
        }
    }
`;

const App = () => (
    <Fragment>
        <GlobalStyle/>
        <Router>
            <TopBar/>
            <Routes/>
        </Router>
    </Fragment>
);

export default App;