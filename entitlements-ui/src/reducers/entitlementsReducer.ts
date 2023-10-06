export enum EntitlementAction {
  FETCH_SUCCESS = 'ENTITLEMENT_FETCH_SUCCESS',
  FETCH_ERROR = 'ENTITLEMENT_FETCH_ERROR',
  DELETE_ERROR = 'ENTITLEMENT_DELETE_ERROR',
  DELETE_SUCCESS = 'ENTITLEMENT_DELETE_SUCCESS',
}

export type EntitlementStateType = {
  entitlements: EntitlementType[];
  loading: boolean;
  error: string;
};

export type EntitlementType = {
  userId: number;
  accountId: number;
};

export type EntitlementActionType =
  | {
      type: EntitlementAction.FETCH_SUCCESS;
      payload: EntitlementType[];
    }
  | {
      type: EntitlementAction.DELETE_SUCCESS;
      payload: { accountId: number; userId: number };
    }
  | {
      type: EntitlementAction.FETCH_ERROR;
    }
  | {
      type: EntitlementAction.DELETE_ERROR;
    };

export const reducer = (
  state: EntitlementStateType,
  action: EntitlementActionType
) => {
  switch (action.type) {
    case EntitlementAction.FETCH_SUCCESS:
      return {
        loading: false,
        entitlements: action.payload,
        error: '',
      };
    case EntitlementAction.FETCH_ERROR:
      return {
        loading: false,
        entitlements: [],
        error: 'User fetching failed',
      };
    case EntitlementAction.DELETE_SUCCESS:
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
    case EntitlementAction.DELETE_ERROR:
      return {
        loading: false,
        entitlements: [],
        error: 'Deleting entitlements failed',
      };
    default:
      return state;
  }
};
