import React from 'react'
import {render} from 'react-dom'
import {Container} from 'cerebral-view-react'

import controller from './controller'
import App from './components/App'

// PureCSS styles
require('purecss/build/pure-min.css');
require('purecss/build/grids-responsive-min.css');
require('purecss/build/menus-min.css');
require('purecss/build/forms-min.css');
require('purecss/build/buttons-min.css');

// Custom styles
require('../css/joy.css');


render((
  <Container controller={controller}>
    <App />
  </Container>
), document.querySelector('#app'))
