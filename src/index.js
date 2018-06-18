import React from 'react';
import ReactDOM from 'react-dom';
import EncodeApp from './EncodeApp';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter} from "react-router-dom";

ReactDOM.render(
    <BrowserRouter>
        <EncodeApp />
    </BrowserRouter>
    , document.getElementById('root'));
registerServiceWorker();
