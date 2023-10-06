export const ACCOUNT_FETCH_SUCCESS = 'ACCOUNT_FETCH_SUCCESS'; // convert to enums
export const ACCOUNT_FETCH_ERROR = 'ACCOUNT_FETCH_ERROR';

export type AccountStateType = {
  accounts: AccountType[];
  loading: boolean;
  error: string;
};

export type AccountType = {
  accountId: number;
  startDt: string;
  baseCurrencyCode: string;
  added?: boolean;
};

type AccountActionType =
  | {
      type: 'ACCOUNT_FETCH_SUCCESS';
      payload: AccountType[];
    }
  | {
      type: 'ACCOUNT_FETCH_ERROR';
    };

export const reducer = (state: AccountStateType, action: AccountActionType) => {
  switch (action.type) {
    case ACCOUNT_FETCH_SUCCESS:
      return {
        loading: false,
        accounts: action.payload,
        error: '',
      };
    case ACCOUNT_FETCH_ERROR:
      return {
        loading: false,
        accounts: [],
        error: 'Account fetching failed',
      };
    default:
      return state;
  }
};
