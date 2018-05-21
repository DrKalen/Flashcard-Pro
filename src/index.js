import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './components/App';
import Stack from './components/Stack';

ReactDom.render(
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={App} />
            <Route path='/stack' component={Stack} />
        </Switch>
    </BrowserRouter>, 
    document.getElementById('root')
);