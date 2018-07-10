import React from 'react';
import {render} from 'react-dom';

import Input from './input';

class App extends React.Component {
  constructor() {
    super();

    this.state = {clicks: 0};
  }

  render() {
    const {clicks} = this.state;

    return (
      <div>
        <h1>Hello simple React webpack boilerplate</h1>
        <button
          onClick={() => {
            this.setState(({clicks}) => {
              return {clicks: clicks + 1};
            });
          }}>Click me</button>
        <h2>{clicks} click{clicks === 1 ? '' : 's'}</h2>
        <Input placeholder="Type here..." />
      </div>
    );
  }
}

render(<App />, document.getElementById('app'));
