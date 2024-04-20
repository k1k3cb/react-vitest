import { render, screen,fireEvent } from '@testing-library/react';
import Accordion from './Accordion';

describe('Accordion', () => {
  beforeEach(() => {
    render(
      <Accordion title='Hello'>
        <h4>content</h4>
    
      </Accordion>
    );
  });

  test('should show title all the time', () => {
    expect(screen.getByText('Hello')).toBeDefined();
  });

  test('should not show the content at the start', () => {
    expect(screen.queryByText(/content/i)).toBeNull();
  });

  test('should show the content after clicking on the button', () => {

    const button= screen.getByText(/open/i);
    fireEvent.click(button);
    expect(screen.queryByText(/content/i)).toBeDefined();
  });

  test('should hide the content when the button is clicked twice', () => {
    const button = screen.getByText(/open/i);
    fireEvent.click(button);
    fireEvent.click(button);
    expect(screen.queryByText(/content/i)).toBeNull();
});
});
