import React from 'react';
import ReactDOM from 'react-dom';

import registerServiceWorker from './registerServiceWorker'; // Service workers are elements of a PWA.

import App from './app/App'; // We import your root component.
import './index.css';

/**
 * This is the root file of your react app. This tells the ReactDOM to render
 * your root component, in this case the <App /> component, to an HTML element
 * with an ID of root. If you'll check public/index.html, there is a div there
 * that has an id of "root". The react app will be rendered there.
 */
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
