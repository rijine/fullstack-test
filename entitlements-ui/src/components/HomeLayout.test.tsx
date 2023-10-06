import { test, describe, expect } from 'vitest';
import { screen } from '@testing-library/react';
import { render } from '../test/test-utils';
import HomeLayout from './HomeLayout';

describe('Home Layout', () => {
  test('nav links should present', async () => {
    render(<HomeLayout />);
    const accountsLink = await screen.findAllByText('Accounts');
    const usersLink = await screen.findAllByText('Users');
    const entilementsLink = await screen.findAllByText('Entitlements');

    expect(accountsLink).not.toBeNull();
    expect(usersLink).not.toBeNull();
    expect(entilementsLink).not.toBeNull();
  });
});
