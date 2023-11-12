import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NotFoundPage from './NotFoundPage';

describe('10. 404 Page component', () => {
  test('displays the 404 page when navigating to an invalid route', () => {
    render(
      <Router>
        <Routes>
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    );

    const notFoundPageElement = screen.getByTestId('not-found-page');
    expect(notFoundPageElement).toBeInTheDocument();
  });

});