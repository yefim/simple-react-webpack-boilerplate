import React from 'react';
import PropTypes from 'prop-types';

class WelcomeMessage extends React.Component {
  render() {
    const { message } = this.props;

    return (
      <h1>{message}</h1>
    );
  }
}

WelcomeMessage.propTypes = {
  message: PropTypes.string.isRequired
};


export default WelcomeMessage;
