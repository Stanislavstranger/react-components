import { Route, Routes } from 'react-router-dom';
import NotFoundPage from '../components/pages/NotFoundPage';
import SearchPage from '../components/SearchPage';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<SearchPage />} />
      <Route path="/*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRouter;
