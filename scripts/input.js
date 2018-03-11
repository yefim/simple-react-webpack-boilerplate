import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  static propTypes = {
    placeholder: PropTypes.string
  };

  static defaultProps = {placeholder: ''};

  constructor() {
    super();

    this.state = {value: ''};
  }

  render() {
    const {value} = this.state;
    const {placeholder} = this.props;

    return (
      <input
        placeholder={placeholder}
        onChange={(e) => {
          const val = e.target.value;
          this.setState(() => {
            return {value: val};
          });
        }}
        value={value}
      />
    );
  }
}

export default Input;
