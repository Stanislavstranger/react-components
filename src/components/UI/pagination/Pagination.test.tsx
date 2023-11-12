import { render, screen, fireEvent } from '../../../utils/test-utils';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import Pagination from './Pagination';

describe('Pagination Component', () => {
  it('updates URL query parameter when page changes', async () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Pagination
          selectPage={() => {}}
          pagesArray={[1, 2, 3]}
          loading={false}
          selectedPage={1}
        />
      </MemoryRouter>
    );

    await fireEvent.click(screen.getByText('1'));

    await console.log(window.location.pathname)

    expect(window.location.pathname).toBe('/?page=1');
  });
});
