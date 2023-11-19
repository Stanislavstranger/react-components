import { render } from '@testing-library/react';
import Notification from './Notification';

describe('Notification Component', () => {
  it('renders children inside Notification component', () => {
    const { getByText } = render(
      <Notification>
        <span>Notification message</span>
      </Notification>
    );

    const notificationText = getByText('Notification message');
    expect(notificationText).toBeInTheDocument();
  });
});
