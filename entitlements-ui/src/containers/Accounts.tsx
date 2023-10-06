import { FC, useEffect, useReducer } from 'react';
import axios from 'axios';

import { useAuth } from '../hooks/useAuth';
import {
  ACCOUNT_FETCH_ERROR,
  ACCOUNT_FETCH_SUCCESS,
  AccountStateType,
  AccountType,
  reducer,
} from '../reducers/accountsReducer';
import { BASE_URL } from '../constants/baseConstants';
import AccountsTable from '../components/AccountsTable';

// type Props = {};
const styles = {
  container: {
    padding: '2rem',
  },
};

const initialState: AccountStateType = {
  loading: true,
  error: '',
  accounts: [],
};

const Accounts: FC = () => {
  const { auth } = useAuth();
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    async function getAccounts() {
      try {
        const response = await axios.get(`${BASE_URL}/accounts/`, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${auth?.token}`,
          },
          withCredentials: true,
        });

        dispatch({
          payload: response.data as AccountType[],
          type: ACCOUNT_FETCH_SUCCESS,
        });
      } catch (err) {
        dispatch({ type: ACCOUNT_FETCH_ERROR });
      }
    }

    getAccounts();
  }, [auth?.token]);

  return (
    <div style={styles.container}>
      <h2>Accounts</h2>
      <AccountsTable accounts={state.accounts} />
    </div>
  );
};

export default Accounts;
