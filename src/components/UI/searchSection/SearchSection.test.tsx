import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import SearchSection from './SearchSection';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { vi } from 'vitest';

const initialState = {
  searchReducer: {
    searchTerm: 'InitialValue',
  },
  loadingReducer: {
    loading: false,
  },
};

const mockStore = configureStore([])(initialState);

vi.mock('../../../hooks/redux', () => ({
  ...vi.importActual('../../../hooks/redux'),
  useAppSelector: vi.fn((selector) => selector(mockStore.getState())),
  useAppDispatch: vi.fn(() => vi.fn()),
}));

describe('9. SearchSection Component', () => {
  it('saves entered value to local storage on Search button click', async () => {
    render(
      <Provider store={mockStore}>
        <SearchSection onSearch={() => {}} />
      </Provider>
    );

    const searchInput = screen.getByPlaceholderText('Select animal');
    const searchButton = screen.getByText('Search');

    fireEvent.change(searchInput, { target: { value: 'InitialValue' } });
    fireEvent.click(searchButton);

    expect(localStorage.getItem('searchTerm')).toBe('InitialValue');
  });

  it('retrieves the value from local storage upon mounting', () => {
    render(
      <Provider store={mockStore}>
        <SearchSection onSearch={() => {}} />
      </Provider>
    );

    const searchInput = screen.getByPlaceholderText(
      'Select animal'
    ) as HTMLInputElement;
    expect(searchInput.value).toBe('InitialValue');
  });
});
