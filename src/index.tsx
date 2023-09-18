import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import {ParallaxProvider} from 'react-scroll-parallax';


import App from './pages/app/App';

import {setupStore} from './redux/store';

import reportWebVitals from './reportWebVitals';

import './theme/typography.scss';
import './theme/normalize.scss';

const store = setupStore();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ParallaxProvider>
        <BrowserRouter basename={process.env.PUBLIC_URL || ''}>
          <App />
        </BrowserRouter>
      </ParallaxProvider>
    </Provider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
