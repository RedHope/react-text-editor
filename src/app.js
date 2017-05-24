// @ts-check
import React from 'react';
import {render} from 'react-dom';

import '../node_modules/bootstrap/dist/css/bootstrap.css';

class App extends React.Component {
  render () {
    return <p> Hello React!</p>;
  }
}

render(<App />, document.getElementById('root'));
console.log('Welcome');