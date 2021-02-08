import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter} from 'react-router-dom';

import './styles/stylesheet.css';

import Main from './components/main';

ReactDom.render(<BrowserRouter><Main/></BrowserRouter>, document.getElementById('root'));