import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import SearchSection from './SearchSection';
import { SearchProvider } from '../../../context/SearchContext';

describe('9. SearchSection Component', () => {
  it('saves entered value to local storage on Search button click', () => {
    render(
      <SearchProvider>
        <SearchSection onSearch={() => {}} loading={false} />
      </SearchProvider>
    );

    const searchInput = screen.getByPlaceholderText('Select animal');
    const searchButton = screen.getByText('Search');

    fireEvent.change(searchInput, { target: { value: 'TestAnimal' } });
    fireEvent.click(searchButton);

    expect(localStorage.getItem('searchTerm')).toBe('TestAnimal');
  });

  it('retrieves the value from local storage upon mounting', () => {
    localStorage.setItem('searchTerm', 'InitialValue');

    render(
      <SearchProvider>
        <SearchSection onSearch={() => {}} loading={false} />
      </SearchProvider>
    );

    const searchInput = screen.getByPlaceholderText(
      'Select animal'
    ) as HTMLInputElement;
    expect(searchInput.value).toBe('InitialValue');
  });
});
