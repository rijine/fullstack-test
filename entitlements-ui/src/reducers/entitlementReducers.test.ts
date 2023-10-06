import { describe, expect, test } from 'vitest';

import {
  reducer,
  EntitlementAction,
  EntitlementType,
  EntitlementActionType,
} from './entitlementsReducer';

describe('Entitlement Reducer', () => {
  const initialState = {
    loading: true,
    entitlements: [],
    error: '',
  };
  test('Fetching Success', () => {
    const action = {
      payload: [{ accountId: 101, userId: 201 }] as EntitlementType[],
      type: EntitlementAction.FETCH_SUCCESS,
    } satisfies EntitlementActionType;
    const newState = reducer(initialState, action);
    expect(newState.entitlements.length).toBe(1);
    expect(newState.loading).toBeFalsy();
  });

  test('Fetching Failed', () => {
    const action = {
      type: EntitlementAction.FETCH_ERROR,
    } satisfies EntitlementActionType;
    const newState = reducer(initialState, action);
    expect(newState.entitlements.length).toBe(0);
    expect(newState.error).not.toBeNull();
  });
});
