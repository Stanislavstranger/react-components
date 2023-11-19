import { render } from '@testing-library/react';
import Input from './Input';

describe('Input component', () => {
  it('renders input element with given props', () => {
    const testPlaceholder = 'Enter text';
    const testValue = 'Test value';

    const { getByPlaceholderText } = render(
      <Input placeholder={testPlaceholder} value={testValue} />
    );

    const inputElement = getByPlaceholderText(
      testPlaceholder
    ) as HTMLInputElement;
    expect(inputElement).toBeInTheDocument();
    expect(inputElement.value).toBe(testValue);
  });
});
