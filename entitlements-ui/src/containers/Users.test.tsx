import { test, describe, expect } from 'vitest';
import { screen } from '@testing-library/react';
import { render } from '../test/test-utils';
import { Users } from '.';

describe('Users', () => {
  test('page displays header', async () => {
    render(<Users />);
    await screen.findByRole('heading');

    expect(screen.getByRole('heading')).toHaveTextContent('Users');
  });
});
