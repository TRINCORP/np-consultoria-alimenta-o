import { ReactNode, Suspense, Component, ErrorInfo } from 'react';

interface SafeThreeProviderProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends Component<{ children: ReactNode }, ErrorBoundaryState> {
  constructor(props: { children: ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.warn('Three.js rendering error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <div className="hidden" />;
    }

    return this.props.children;
  }
}

export const SafeThreeProvider = ({ children }: SafeThreeProviderProps) => {
  return (
    <ErrorBoundary>
      <Suspense fallback={null}>
        {children}
      </Suspense>
    </ErrorBoundary>
  );
};
