import React , { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from 'Components/app';
import CheckOut from 'Containers/checkout';
import store from 'Store/store';
import { createBrowserHistory } from 'history';
import {BrowserRouter as Router , Route} from 'react-router-dom';
import {  browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'



/*render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);*/

const history = syncHistoryWithStore(createBrowserHistory(), store)

render(
    <Provider store={store}>
        <div>
	      <Router>
		      <div>
		        <Route exact={true} path="/" component={App}/>
		        <Route path="/checkout" component={CheckOut}/>  
		      </div>
	      </Router>
	    </div>
    </Provider>,
    document.getElementById('root')
);