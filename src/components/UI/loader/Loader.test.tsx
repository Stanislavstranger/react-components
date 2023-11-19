import { render } from '@testing-library/react';
import Loader from './Loader';

describe('Loader Component', () => {
  it('renders the loader image', () => {
    const { getByAltText } = render(<Loader />);
    const loaderImage = getByAltText('loading_ship');
    expect(loaderImage).toBeInTheDocument();
  });
});
