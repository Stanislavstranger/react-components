import { render } from '../../../utils/test-utils';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CardList from './CardList';
import { vi } from 'vitest';
import * as SearchContextModule from '../../../context/SearchContext';

vi.mock('../../../context/SearchContext', () => ({
  ...vi.importActual('../../../context/SearchContext'),
  useSearch: vi.fn(),
}));

const mockAnimals = [
  {
    uid: 'ANMA0000032315',
    name: "'Owon",
    earthAnimal: false,
    earthInsect: false,
    avian: false,
    canine: false,
    feline: false,
  },
  {
    uid: 'ANMA0000264633',
    name: 'Abalone',
    earthAnimal: true,
    earthInsect: false,
    avian: false,
    canine: false,
    feline: false,
  },
  {
    uid: 'ANMA0000262167',
    name: 'Albatross',
    earthAnimal: true,
    earthInsect: false,
    avian: false,
    canine: false,
    feline: false,
  },
];

describe('5. CardList Component', () => {
  it('renders the specified number of cards', () => {
    vi.spyOn(SearchContextModule, 'useSearch').mockImplementation(() => ({
      searchTerm: '',
      setSearchTerm: vi.fn(),
      animals: mockAnimals,
      setAnimals: vi.fn(),
      selectedAnimal: mockAnimals[0],
      setSelectedAnimal: vi.fn(),
    }));

    render(<CardList onCardClick={() => {}} />);

    expect(screen.getAllByTestId('card-element')).toHaveLength(
      mockAnimals.length
    );
  });

  it('displays an appropriate message if no cards are present', () => {
    vi.spyOn(SearchContextModule, 'useSearch').mockImplementation(() => ({
      searchTerm: '',
      setSearchTerm: vi.fn(),
      animals: [],
      setAnimals: vi.fn(),
      selectedAnimal: mockAnimals[0],
      setSelectedAnimal: vi.fn(),
    }));

    render(<CardList onCardClick={() => {}} />);

    expect(screen.getByText('No cards found.')).toBeInTheDocument();
  });

  it('calls onCardClick when a card is clicked', async () => {
    vi.spyOn(SearchContextModule, 'useSearch').mockImplementation(() => ({
      searchTerm: '',
      setSearchTerm: vi.fn(),
      animals: [
        {
          uid: 'ANMA0000264633',
          name: 'Abalone',
          earthAnimal: true,
          earthInsect: false,
          avian: false,
          canine: false,
          feline: false,
        },
      ],
      setAnimals: vi.fn(),
      selectedAnimal: mockAnimals[0],
      setSelectedAnimal: vi.fn(),
    }));

    const onCardClickMock = vi.fn();

    render(<CardList onCardClick={onCardClickMock} />);

    await userEvent.click(screen.getByTestId('card-element'));

    expect(onCardClickMock).toHaveBeenCalledWith({
      uid: 'ANMA0000264633',
      name: 'Abalone',
      earthAnimal: true,
      earthInsect: false,
      avian: false,
      canine: false,
      feline: false,
    });
  });
});
