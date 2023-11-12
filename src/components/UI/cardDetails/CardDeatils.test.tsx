import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import CardDetails from './CardDetails';
import { vi } from 'vitest';
import { searchAnimalsByName } from '../../../services/LoadingDataService';
import { SearchProvider } from '../../../context/SearchContext';

vi.mock('../../../services/LoadingDataService', () => ({
  searchAnimalsByName: vi.fn(() =>
    Promise.resolve({ animals: [{ uid: '1', name: 'Test Animal' }] })
  ),
}));

describe('CardDetails Component', () => {
  it('displays loading indicator while fetching data', async () => {
    render(
      <SearchProvider>
        <CardDetails />
      </SearchProvider>
    );

    expect(screen.getByTestId('loader')).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.queryByTestId('loader')).not.toBeInTheDocument();
    });
  });

  it('displays detailed card data correctly', async () => {
    render(
      <SearchProvider>
        <CardDetails />
      </SearchProvider>
    );

    await waitFor(() => {
      expect(screen.getByText('Test Animal')).toBeInTheDocument();
      expect(
        screen.getByTestId('card-description').querySelectorAll('p').length
      ).toBeGreaterThan(0);
    });
  });

  it('hides the component when clicking the close button', async () => {
    render(
      <SearchProvider>
        <CardDetails />
      </SearchProvider>
    );

    await waitFor(() => {
      expect(screen.getByTestId('modal')).toBeInTheDocument();
    });

    fireEvent.click(screen.getByTestId('close-button'));

    await waitFor(() => {
      expect(screen.queryByTestId('modal')).not.toBeInTheDocument();
    });
  });
});
