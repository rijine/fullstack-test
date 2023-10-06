import React, { ErrorInfo, ReactNode } from 'react';

export interface IErrorBoundaryProps {
  children: ReactNode;
  fallback: ReactNode;
}

class ErrorBoundary extends React.Component<IErrorBoundaryProps> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.log(info, error);
  }

  render() {
    if (this.state.hasError) return this.props.fallback;
    else return this.props.children;
  }
}

export default ErrorBoundary;
