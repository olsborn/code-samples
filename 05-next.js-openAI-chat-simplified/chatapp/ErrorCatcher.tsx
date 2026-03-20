import React, { Component, ReactNode } from 'react';

interface ErrorCatcherProps {
  children: ReactNode;
  fallback?: ReactNode | ((error: Error) => ReactNode);
}

interface ErrorCatcherState {
  hasError: boolean;
  error?: Error;
}

export default class ErrorCatcher extends Component<ErrorCatcherProps, ErrorCatcherState> {
  constructor(props: ErrorCatcherProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Optional: log errorInfo
  }

  render(): ReactNode {
    if (this.state.hasError) {
      if (typeof this.props.fallback === 'function' && this.state.error) {
        return this.props.fallback(this.state.error);
      } else if (typeof this.props.fallback === 'function') {
        return this.props.fallback(new Error('An unknown error occurred'));
      } else {
        return (
          <div>
            <h2>Something went wrong!</h2>
            <pre>{this.state.error?.message}</pre>
          </div>
        );
      }
    }
    return this.props.children;
  }
}
