import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';
import Card from './Card';
import * as SearchContextModule from '../../../context/SearchContext';

vi.mock('../../../context/SearchContext', () => ({
  ...vi.importActual('../../../context/SearchContext'),
  useSearch: vi.fn(),
}));

describe('6. Card Component', () => {
  const mockAnimal = {
    uid: 'ANMA0000264633',
    name: 'Abalone',
    earthAnimal: true,
    earthInsect: false,
    avian: false,
    canine: false,
    feline: false,
  };

  it('renders relevant card data', () => {
    vi.spyOn(SearchContextModule, 'useSearch').mockImplementation(() => ({
      searchTerm: '',
      setSearchTerm: vi.fn(),
      animals: [mockAnimal],
      setAnimals: vi.fn(),
      selectedAnimal: mockAnimal,
      setSelectedAnimal: vi.fn(),
    }));

    render(<Card animal={mockAnimal} onCardClick={() => {}} />);

    expect(screen.getByText('Abalone')).toBeInTheDocument();
  });

  it('opens a detailed card component on card click', () => {
    const onCardClickMock = vi.fn();
    const setSelectedAnimal = vi.fn();
    SearchContextModule.useSearch.mockReturnValue({
      setSelectedAnimal,
    });

    render(<Card animal={mockAnimal} onCardClick={onCardClickMock} />);

    fireEvent.click(screen.getByTestId('card-element'));

    expect(onCardClickMock).toHaveBeenCalledWith(mockAnimal);

    expect(setSelectedAnimal).toHaveBeenCalledWith(mockAnimal);
  });

  it('triggers an additional API call on card click', async () => {
    const mockFetchDetailedInfo = vi.fn(() => Promise.resolve({}));

    vi.spyOn(SearchContextModule, 'useSearch').mockImplementation(() => ({
      searchTerm: '',
      setSearchTerm: vi.fn(),
      animals: [mockAnimal],
      setAnimals: vi.fn(),
      selectedAnimal: mockAnimal,
      setSelectedAnimal: vi.fn(),
    }));

    render(<Card animal={mockAnimal} onCardClick={mockFetchDetailedInfo} />);

    await userEvent.click(screen.getByTestId('card-element'));

    await waitFor(() => {
      expect(mockFetchDetailedInfo).toHaveBeenCalledTimes(1);
    });
  });
});
