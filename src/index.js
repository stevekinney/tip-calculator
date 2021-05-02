import React from 'react';
import ReactDOM from 'react-dom';
import { Theme } from '@twilio-paste/core/theme';

import Application from './Application';
import { store } from './store';

import './index.css';
import { Provider } from 'react-redux';

ReactDOM.render(
  <Provider store={store}>
    <Theme.Provider theme="default">
      <React.StrictMode>
        <Application />
      </React.StrictMode>
    </Theme.Provider>
  </Provider>,
  document.getElementById('root')
);
