import { HttpResponse, http } from 'msw';
import { setupServer } from 'msw/node';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Card from './Card';
import { vi } from 'vitest';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

const mockStore = configureStore([]);
const store = mockStore({});

const animal = {
  uid: 'ANMA0000264633',
  name: 'Abalone',
  earthAnimal: true,
  earthInsect: false,
  avian: false,
  canine: false,
  feline: false,
};

const server = setupServer(
  http.get('?name=Abalone', () => {
    return HttpResponse.json(animal);
  })
);

beforeAll(() => server.listen());
afterEach(() => {
  server.resetHandlers();
  store.clearActions();
});
afterAll(() => server.close());

describe('6. Card Component', () => {
  it('renders relevant card data', async () => {
    render(
      <Provider store={store}>
        <Card animal={animal} onClick={() => {}} />
      </Provider>
    );

    expect(await screen.findByText('Abalone')).toBeInTheDocument();
  });

  it('opens a detailed card component on card click', async () => {
    const mockFetchDetailedInfo = vi.fn();
    render(
      <Provider store={store}>
        <Card animal={animal} onClick={mockFetchDetailedInfo} />
      </Provider>
    );

    fireEvent.click(screen.getByTestId('card-element'));

    expect(mockFetchDetailedInfo).toHaveBeenCalledWith(animal.uid);
  });

  it('triggers an additional API call on card click', async () => {
    const mockFetchDetailedInfo = vi.fn(() => Promise.resolve({}));
    render(
      <Provider store={store}>
        <Card animal={animal} onClick={mockFetchDetailedInfo} />
      </Provider>
    );

    await fireEvent.click(screen.getByTestId('card-element'));

    await waitFor(() => {
      expect(mockFetchDetailedInfo).toHaveBeenCalledTimes(1);
    });
  });
});
