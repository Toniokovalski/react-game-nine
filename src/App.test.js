import { render, screen } from '@testing-library/react';
import Game from './components/Game/Game';

test('render main title', () => {
  render(<Game />);
  expect(screen.getByText(/Game Nine/i)).toBeInTheDocument();
});
