import React from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';
import { createGlobalStyle } from 'styled-components';
import { CurrentUserProvider } from './contexts/currentUser';

import TopBar from "./components/TopBar";
import CurrentUserChecker from "./components/CurrentUserChecker";

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
    <CurrentUserProvider>
        <GlobalStyle/>
        <CurrentUserChecker>
            <Router>
                <TopBar/>
                <Routes/>
            </Router>
        </CurrentUserChecker>
    </CurrentUserProvider>
);

export default App;