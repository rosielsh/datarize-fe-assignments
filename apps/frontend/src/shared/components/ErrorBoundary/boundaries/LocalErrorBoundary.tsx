import type { ReactNode } from 'react';
import { Component, type ErrorInfo } from 'react';
import LocalErrorFallback from '../fallbacks/LocalErrorFallback';

type Props = {
  children: ReactNode;
  onRetry?: () => void;
  fallback?: ReactNode;
};

type State = {
  hasError: boolean;
  error: Error | null;
};

class LocalErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('로컬 에러 발생:', error, errorInfo);
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null });
    if (this.props.onRetry) {
      this.props.onRetry();
    }
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }
      return <LocalErrorFallback onRetry={this.handleReset} error={this.state.error} />;
    }

    return this.props.children;
  }
}

export default LocalErrorBoundary;
