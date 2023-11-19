import { vi } from 'vitest';
import { render, fireEvent } from '@testing-library/react';
import Modal from './Modal';

describe('Modal Component', () => {
  it('renders modal when visible is true', () => {
    const setVisibleMock = vi.fn();
    const { getByText, container } = render(
      <Modal visible={true} setVisible={setVisibleMock}>
        <div>Modal Content</div>
      </Modal>
    );

    const modalContent = getByText('Modal Content');
    expect(modalContent).toBeInTheDocument();

    fireEvent.click(container.firstChild!);

    expect(setVisibleMock).toHaveBeenCalledWith(false);
  });
});
