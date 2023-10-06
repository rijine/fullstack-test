export const USER_FETCH_SUCCESS = 'USER_FETCH_SUCCESS'; // convert to enums
export const USER_FETCH_ERROR = 'USER_FETCH_ERROR';

export type UserStateType = {
  users: UserType[];
  loading: boolean;
  error: string;
};

export type UserType = {
  name: string;
  email: string;
  userId: number;
  role: string;
};

type UserActionType =
  | {
      type: 'USER_FETCH_SUCCESS';
      payload: UserType[];
    }
  | {
      type: 'USER_FETCH_ERROR';
    };

export const reducer = (state: UserStateType, action: UserActionType) => {
  switch (action.type) {
    case USER_FETCH_SUCCESS:
      return {
        loading: false,
        users: action.payload,
        error: '',
      };
    case USER_FETCH_ERROR:
      return {
        loading: false,
        users: [],
        error: 'User fetching failed',
      };
    default:
      return state;
  }
};
