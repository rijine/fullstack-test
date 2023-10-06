import { test, describe, expect } from 'vitest';
import { screen } from '@testing-library/react';
import { render } from '../test/test-utils';
import { Entitlements } from '.';

describe('Entitlements', () => {
  test('page displays header', async () => {
    render(<Entitlements />);
    await screen.findByRole('heading');

    expect(screen.getByRole('heading')).toHaveTextContent('Entitlements');
  });
});
