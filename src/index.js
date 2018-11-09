import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, createStore } from 'redux';
import { rootReducer } from './reducers/index';
import thunk from 'redux-thunk';


const middleware = applyMiddleware(thunk);

const store = createStore(
    rootReducer,
    compose(middleware)
);

/* 
 * window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
 * Moved here for reference, and so as to not break app on compile for reviewers 
 * w/o Redux devtools installed
 * https://github.com/reduxjs/redux/issues/2359
 */

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

serviceWorker.unregister();

