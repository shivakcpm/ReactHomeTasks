import React, { Component } from 'react';
import './ErrorBoundary.css';

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, errorMessage: '' };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, errorMessage: error.errorMessage };
  }

  componentDidCatch(error, errorInfo) {
    const { logErrors = false } = this.props;
    if (logErrors) {
      console.log(error, errorInfo);
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="info-message">
          <h1>No Movie Found</h1>
        </div>
      );
    }

    return this.props.children;
  }
}
