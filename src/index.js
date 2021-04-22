import React from 'react';
import ReactDOM from 'react-dom';
import { Theme } from '@twilio-paste/core/theme';

import Application from './Application';

import './index.css';

ReactDOM.render(
  <Theme.Provider theme='default'>
    <React.StrictMode>
      <Application />
    </React.StrictMode>
  </Theme.Provider>,
  document.getElementById('root')
);
