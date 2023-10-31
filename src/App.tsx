import './App.css';
import ErrorBoundary from './components/ErrorBondary';
import SearchPage from './components/SearchPage';

function App() {
  return (
    <ErrorBoundary>
      <SearchPage />
    </ErrorBoundary>
  );
}

export default App;
