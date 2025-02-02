import { Component } from 'react';
import './error-msg.css';

import error from '../../assets/img/error.png';

interface ErrorMsgProps {
  error?: string;
}

class ErrorMsg extends Component<ErrorMsgProps> {
  render() {
    return (
      <section className="err-msg">
        {!!this.props.error && (
          <h2 className="err-title">{this.props.error}</h2>
        )}
        <img src={error} className="error" alt="error" />
      </section>
    );
  }
}

export default ErrorMsg;
