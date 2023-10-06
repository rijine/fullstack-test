import { test, describe, expect } from 'vitest';
import { screen } from '@testing-library/react';
import { render } from '../test/test-utils';
import { Accounts } from '.';

describe('Accounts', () => {
  test('page displays header', async () => {
    render(<Accounts />);
    await screen.findByRole('heading');

    expect(screen.getByRole('heading')).toHaveTextContent('Accounts');
  });
});
