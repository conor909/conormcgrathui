import 'react-app-polyfill/ie11';
import './fonts/Bariol-Regular-Webfont/bariol_regular-webfont.eot'
import './fonts/Bariol-Regular-Webfont/bariol_regular-webfont.svg'
import './fonts/Bariol-Regular-Webfont/bariol_regular-webfont.ttf'
import './fonts/Bariol-Regular-Webfont/bariol_regular-webfont.woff'
import './fonts/Bariol-Regular-Webfont/bariol_regular-webfont.woff2'

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
