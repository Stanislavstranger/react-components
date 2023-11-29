import { Link, Route, Routes } from 'react-router-dom';
import UncontrolledForm from './pages/UncontrolledForm/UncontrolledForm';
import ControlledForm from './pages/ControlledForm/ControlledForm';
import MainPage from './pages/MainPage/MainPage';
import { Suspense } from 'react';
import useTheme from './theme/useTheme';

function App() {
  const {theme, toggleTheme} = useTheme();

  return (
    <div className={`app ${theme}`}>
      <Link to={'/'}>Main page</Link>
      <Link to={'/uncontrolled-form'}>Uncontrolled form</Link>
      <Link to={'/controlled-form'}>Controlled form</Link>
      <button onClick={toggleTheme}>{theme}</button>

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={'/'} element={<MainPage />} />
          <Route path={'/uncontrolled-form'} element={<UncontrolledForm />} />
          <Route path={'/controlled-form'} element={<ControlledForm />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
