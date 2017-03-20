import React, { PropTypes } from 'react';

const WelcomeMessage = React.createClass({
  propTypes: {
    message: PropTypes.string.isRequired
  },

  render() {
    const { message } = this.props;

    return (
      <h1>{message}</h1>
    );
  }
});

export default WelcomeMessage;
