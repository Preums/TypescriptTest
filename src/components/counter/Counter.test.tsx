import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';

import Counter from "./Counter";

test('Should render a counter', () => {
  render(<Counter />);
  const counterValue = screen.getByTitle('count-value');
  const increment = screen.getByTitle('increment');
  const decrement = screen.getByTitle('decrement');
  expect(counterValue).toBeInTheDocument();
  expect(counterValue.textContent).toBe('Actual count: 0');
  fireEvent.click(decrement);
  expect(counterValue.textContent).toBe('Actual count: 0');
  fireEvent.click(increment);
  expect(counterValue.textContent).toBe('Actual count: 1');
  fireEvent.click(decrement);
  expect(counterValue.textContent).toBe('Actual count: 0');
});

test('Should render a counter with an initial value of 12', () => {
  render(<Counter initialCount={12} />);
  const increment = screen.getByTitle('increment');
  const decrement = screen.getByTitle('decrement');
  const counterValue = screen.getByTitle('count-value');
  expect(counterValue).toBeInTheDocument();
  expect(counterValue.textContent).toBe('Actual count: 12');
  fireEvent.click(increment);
  expect(counterValue.textContent).toBe('Actual count: 13');
  fireEvent.click(decrement);
  expect(counterValue.textContent).toBe('Actual count: 12');
});

test('Should use a step of 10 when shift+click', () => {
  render(<Counter />);
  const increment = screen.getByTitle('increment');
  const decrement = screen.getByTitle('decrement');
  const counterValue = screen.getByTitle('count-value');
  expect(counterValue).toBeInTheDocument();
  expect(counterValue.textContent).toBe('Actual count: 0');
  userEvent.click(increment);
  expect(counterValue.textContent).toBe('Actual count: 1');
  userEvent.click(increment, { shiftKey: true });
  expect(counterValue.textContent).toBe('Actual count: 11');
  userEvent.click(decrement, { shiftKey: true });
  expect(counterValue.textContent).toBe('Actual count: 1');
  userEvent.click(decrement, { shiftKey: true });
  expect(counterValue.textContent).toBe('Actual count: 0');
});