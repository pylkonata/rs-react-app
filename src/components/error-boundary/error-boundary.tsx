import { Component, ErrorInfo, ReactNode } from 'react';

import './error-boundary.css';

import { ErrorMsg } from '../error-msg';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  error: boolean;
}

class ErrorBoundary extends Component<ErrorBoundaryProps> {
  state: ErrorBoundaryState = {
    error: false,
  };

  static getDerivedStateFromError() {
    return { error: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.error) {
      return (
        <section className="error-section">
          <ErrorMsg />
          <button
            className="btn"
            onClick={() => this.setState({ error: false })}
          >
            Reset Error
          </button>
        </section>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
