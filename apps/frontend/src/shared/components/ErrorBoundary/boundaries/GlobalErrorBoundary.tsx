import type { ReactNode } from 'react';
import { Component, type ErrorInfo } from 'react';
import GlobalErrorFallback from '../fallbacks/GlobalErrorFallback';

type Props = {
  children: ReactNode;
};

type State = {
  hasError: boolean;
  error: Error | null;
};

class GlobalErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('전역 에러 발생:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <GlobalErrorFallback error={this.state.error} />;
    }

    return this.props.children;
  }
}

export default GlobalErrorBoundary;
