import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Application from './Application';

import { Theme } from '@twilio-paste/core/theme';

ReactDOM.render(
  <Theme.Provider theme='default'>
    <React.StrictMode>
      <Application />
    </React.StrictMode>
  </Theme.Provider>,
  document.getElementById('root')
);
