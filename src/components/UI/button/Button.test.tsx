import { render } from '@testing-library/react';
import Button from './Button';

describe('Button Component', () => {
  it('renders button with children', () => {
    const buttonText = 'Click me';
    const { getByText } = render(<Button>{buttonText}</Button>);
    const button = getByText(buttonText);

    expect(button).toBeInTheDocument();
  });
});
