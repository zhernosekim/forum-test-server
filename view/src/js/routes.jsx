import React  from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import store from './store.js';
import App from './app.jsx';
import Index from './pages/Index.jsx';

const Routes = store => {
    return (
        <Provider store={store}>
            <Router history={browserHistory}>
                <Route path="/" component={App}>
                    <IndexRoute component={Index} />
                </Route>
            </Router>
        </Provider>
    )
};

export default Routes(store);