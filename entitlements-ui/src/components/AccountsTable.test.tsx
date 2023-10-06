import { test, describe, expect } from 'vitest';
import { screen } from '@testing-library/react';
import { render } from '../test/test-utils';
import AccountsTable from './AccountsTable';
import { AccountType } from '../reducers/accountsReducer';

describe('Accounts Table', () => {
  const accounts: AccountType[] = [
    {
      accountId: 101010,
      startDt: new Date().toString(),
      baseCurrencyCode: 'GBP',
    },
  ];
  test('table headers should present', async () => {
    render(<AccountsTable accounts={accounts} />);
    const idHeader = await screen.findAllByText('Account Id');
    const dateHeader = await screen.findAllByText('Start Date');
    const currencyHeader = await screen.findAllByText('Base Currency');

    expect(idHeader).not.toBeNull();
    expect(dateHeader).not.toBeNull();
    expect(currencyHeader).not.toBeNull();
  });

  test('table rows should render properly', async () => {
    render(<AccountsTable accounts={accounts} />);
    expect(screen.getByTitle('rows').children.length).toBe(1);
  });
});
