export const ENTITLEMENT_FETCH_SUCCESS = 'ENTITLEMENT_FETCH_SUCCESS';
export const ENTITLEMENT_FETCH_ERROR = 'ENTITLEMENT_FETCH_ERROR';
export const ENTITLEMENT_DELETE_ERROR = 'ENTITLEMENT_DELETE_ERROR';
export const ENTITLEMENT_DELETE_SUCCESS = 'ENTITLEMENT_DELETE_SUCCESS';

export type EntitlementStateType = {
  entitlements: EntitlementType[];
  loading: boolean;
  error: string;
};

export type EntitlementType = {
  userId: number;
  accountId: number;
};

type EntitlementActionType =
  | {
      type: 'ENTITLEMENT_FETCH_SUCCESS';
      payload: EntitlementType[];
    }
  | {
      type: 'ENTITLEMENT_DELETE_SUCCESS';
      payload: { accountId: number; userId: number };
    }
  | {
      type: 'ENTITLEMENT_FETCH_ERROR';
    }
  | {
      type: 'ENTITLEMENT_DELETE_ERROR';
    };

export const reducer = (
  state: EntitlementStateType,
  action: EntitlementActionType
) => {
  switch (action.type) {
    case ENTITLEMENT_FETCH_SUCCESS:
      return {
        loading: false,
        entitlements: action.payload,
        error: '',
      };
    case ENTITLEMENT_FETCH_ERROR:
      return {
        loading: false,
        entitlements: [],
        error: 'User fetching failed',
      };
    case ENTITLEMENT_DELETE_SUCCESS:
      return {
        loading: false,
        entitlements: state.entitlements.filter(({ accountId, userId }) => {
          return !(
            action.payload.userId === userId &&
            action.payload.accountId === accountId
          );
        }),
        error: '',
      };
    case ENTITLEMENT_DELETE_ERROR:
      return {
        loading: false,
        entitlements: [],
        error: 'Deleting entitlements failed',
      };
    default:
      return state;
  }
};
