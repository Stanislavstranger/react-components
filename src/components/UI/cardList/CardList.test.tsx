import { http, HttpResponse } from 'msw';
import { setupServer } from 'msw/node';
import { render, screen } from '../../../utils/test-utils';
import userEvent from '@testing-library/user-event';
import CardList from './CardList';
import { vi } from 'vitest';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

const animals = [
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

const mockState = {
  itemsReducer: {
    animals: animals,
  },
};

const mockStore = configureStore([]);
const store = mockStore(mockState);

const server = setupServer(
  http.get('', () => {
    return HttpResponse.json(animals);
  })
);

beforeAll(() => server.listen());
afterEach(() => {
  server.resetHandlers();
  store.clearActions();
});
afterAll(() => server.close());

describe('5. CardList Component', () => {
  it('renders the specified number of cards', async () => {
    render(
      <Provider store={store}>
        <CardList onCardClick={() => {}} />
      </Provider>
    );

    const cards = await screen.findAllByTestId('card-element');
    expect(cards).toHaveLength(3);
  });

  it('displays an appropriate message if no cards are present', async () => {
    const mockState = {
      itemsReducer: {
        animals: [],
      },
    };

    const store = mockStore(mockState);

    server.use(
      http.get('', () => {
        return HttpResponse.json([]);
      })
    );

    render(
      <Provider store={store}>
        <CardList onCardClick={() => {}} />
      </Provider>
    );

    const noCardsMessage = screen.queryByText('No cards found.');
    expect(noCardsMessage).toBeInTheDocument();
  });

  it('calls onCardClick when a card is clicked', async () => {
    const mockState = {
      itemsReducer: {
        animals: [
          {
            uid: 'ANMA0000032315',
            name: "'Owon",
            earthAnimal: false,
            earthInsect: false,
            avian: false,
            canine: false,
            feline: false,
          },
        ],
      },
    };

    const store = mockStore(mockState);
    const onCardClickMock = vi.fn();

    render(
      <Provider store={store}>
        <CardList onCardClick={onCardClickMock} />
      </Provider>
    );

    await userEvent.click(screen.getByTestId('card-element'));

    expect(onCardClickMock).toHaveBeenCalledWith(animals[0]);
  });
});
