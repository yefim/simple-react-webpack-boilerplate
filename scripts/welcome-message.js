import React from 'react';
import PropTypes from 'prop-types';

import Input from './input';

class WelcomeMessage extends React.Component {
  static propTypes = {
    message: PropTypes.string.isRequired
  };

  constructor() {
    super();

    this.state = {
      clicks: 0
    };
  }

  render() {
    const {message} = this.props;
    const {clicks} = this.state;

    return (
      <div>
        <h1>{message}</h1>
        <button
          onClick={() => {
            this.setState({clicks: clicks + 1});
          }}>Click me</button>
        <h2>{clicks} click{clicks === 1 ? '' : 's'}</h2>
        <Input placeholder="Type here..." />
      </div>
    );
  }
}

export default WelcomeMessage;
