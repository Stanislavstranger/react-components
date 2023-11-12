import './App.css';
import ErrorBoundary from './components/ErrorBondary';
import SearchPage from './components/SearchPage';
import AppRouter from './router/AppRouter';

function App() {
  return (
    <ErrorBoundary>
      <SearchPage />
      <AppRouter />
    </ErrorBoundary>
  );
}

export default App;
