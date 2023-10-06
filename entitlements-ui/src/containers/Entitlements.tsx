import { useEffect, useReducer, useState } from 'react';
import axios from 'axios';
import {
  reducer,
  EntitlementAction,
  EntitlementStateType,
  EntitlementType,
} from '../reducers/entitlementsReducer';
import { useAuth } from '../hooks/useAuth';
import { BASE_URL } from '../constants/baseConstants';
import { useDebounce } from '@uidotdev/usehooks';

// type Props = {};
const styles = {
  container: {
    padding: '2rem',
  },
};

const initialState: EntitlementStateType = {
  loading: true,
  error: '',
  entitlements: [],
};

const Entitlements = () => {
  const { auth } = useAuth();
  const [search, setSearch] = useState<string>('');
  const searchValue = useDebounce(search, 300);
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    async function getEntitlements() {
      try {
        const response = await axios.get(
          `${BASE_URL}/entitlements/${searchValue}`,
          {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${auth?.token}`,
            },
          }
        );

        dispatch({
          payload: response.data as EntitlementType[],
          type: EntitlementAction.FETCH_SUCCESS,
        });
      } catch (err) {
        dispatch({ type: EntitlementAction.FETCH_ERROR });
      }
    }

    getEntitlements();
  }, [auth?.token, searchValue]);

  // Enalbe deletion in entitlement page
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const deleteEntilement = async (userId: number, accountId: number) => {
    try {
      const response = await axios.delete(`${BASE_URL}/entitlements/`, {
        data: {
          userId,
          accountIds: [accountId],
        },
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${auth?.token}`,
        },
      });

      if (response.data.success) {
        dispatch({
          payload: { userId, accountId },
          type: EntitlementAction.DELETE_SUCCESS,
        });
      }
    } catch (err) {
      dispatch({ type: EntitlementAction.DELETE_ERROR });
    }
  };

  return (
    <div style={styles.container}>
      <div className="d-flex justify-content-between">
        <h2 role="heading">Entitlements</h2>
        <div>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search User"
              aria-label="Search User"
            />
          </form>
        </div>
      </div>
      <table className="table">
        <thead>
          <tr>
            {/* <th>#</th> */}
            <th>Account Id</th>
            <th>User Id</th>
            {/* {auth?.role === 'ADMIN' && <th>Actions</th>} */}
          </tr>
        </thead>
        <tbody>
          {state.entitlements.map(({ accountId, userId }) => (
            <tr key={`${accountId}.${userId}`}>
              {/* <th>{index}</th> */}
              <td>{accountId}</td>
              <td>{userId}</td>

              {/* {auth?.role === 'ADMIN' && (
                <td>
                  <button
                    aria-label="Delete Entitlement"
                    className="btn btn-info btn-sm"
                    onClick={() => deleteEntilement(userId, accountId)}
                  >
                    X
                  </button>
                </td>
              )} */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Entitlements;
