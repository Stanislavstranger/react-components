import { Route, Routes } from 'react-router-dom';
import UncontrolledPage from './pages/UncontrolledPage/UncontrolledPage';
import ControlledPage from './pages/ControlledPage/ControlledPage';
import MainPage from './pages/MainPage/MainPage';
import { Suspense } from 'react';
import useTheme from './theme/useTheme';
import Header from './components/UI/header/Header';
import PageNotFound from './pages/PageNotFound/PageNotFound';

function App() {
  const { theme } = useTheme();

  return (
    <div className={`app ${theme}`}>
      <Header />

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={'/'} element={<MainPage />} />
          <Route path={'/uncontrolled-page'} element={<UncontrolledPage />} />
          <Route path={'/controlled-page'} element={<ControlledPage />} />
          <Route path={'/*'} element={<PageNotFound />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
