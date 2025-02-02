import { Component } from 'react';
import './App.css';

import { Home } from './pages.ts';
import ErrorBoundary from './components/error-boundary/error-boundary.tsx';

class App extends Component {
  render() {
    return (
      <div className="app">
        <ErrorBoundary>
          <Home />
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;
