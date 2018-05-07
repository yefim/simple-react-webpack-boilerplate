import React from 'react';
import {render} from 'react-dom';

import WelcomeMessage from './welcome-message';

render(
  <WelcomeMessage
    message="Hello simple React webpack boilerplate"
  />,
  document.getElementById('app')
);
