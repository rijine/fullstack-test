import { FC, useEffect, useReducer, useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import axios from 'axios';
import Modal from 'react-modal';
import {
  USER_FETCH_ERROR,
  USER_FETCH_SUCCESS,
  UserStateType,
  UserType,
  reducer,
} from '../reducers/usersReducer';
import { BASE_URL } from '../constants/baseConstants';
import AccountsTable from '../components/AccountsTable';
import { AccountType } from '../reducers/accountsReducer';

// type Props = {};

const styles = {
  userContainer: {
    padding: '2rem',
  },
  modalStyles: {
    content: {
      top: '40%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
    },
  },
};

const initialState: UserStateType = {
  loading: true,
  error: '',
  users: [],
};

const Users: FC = () => {
  const { auth } = useAuth();
  const [state, dispatch] = useReducer(reducer, initialState);
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState<number>();
  const [entAccounts, setEntAccounts] = useState<AccountType[]>([]);

  const openAddEntilement = async (userId: number) => {
    setUser(userId);
    setIsOpen(true);
    await getAccounts(userId);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  async function getAccounts(userId: number) {
    try {
      const response = await axios.get(`${BASE_URL}/accounts/user/${userId}`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${auth?.token}`,
        },
      });
      setEntAccounts(response.data);
    } catch (err) {
      console.log(err);
    }
  }

  async function changeEntitlements(accountId: number, isAdd: boolean) {
    if (!user) return;
    try {
      const data = {
        userId: user,
        accountIds: [accountId],
      };
      const headers = {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${auth?.token}`,
      };

      let response;
      if (isAdd) {
        response = await axios.post(`${BASE_URL}/entitlements/`, data, {
          headers,
        });
      } else {
        response = await axios.delete(`${BASE_URL}/entitlements/`, {
          data,
          headers,
        });
      }

      if (response.data.success) {
        await getAccounts(user);
      }
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    async function getUsers() {
      try {
        const response = await axios.get(`${BASE_URL}/users/`, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${auth?.token}`,
          },
        });

        dispatch({
          payload: response.data as UserType[],
          type: USER_FETCH_SUCCESS,
        });
      } catch (err) {
        dispatch({ type: USER_FETCH_ERROR });
      }
    }

    getUsers();
  }, [auth?.token]);

  // const handleAction = (userId: number) => {
  //   console.log(userId);
  // };

  return (
    <div style={styles.userContainer}>
      <h2>Users</h2>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Id</th>
            <th>Full Name</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {state.users.map((user, index) => (
            <tr key={user.userId}>
              <th>{index}</th>
              <td>{user.userId}</td>
              <td>{user.name}</td>
              <td>{user.role}</td>
              <td>
                {auth?.role === 'ADMIN' && (
                  <button
                    className="btn btn-primary btn-sm"
                    aria-label="Add Entitlement"
                    onClick={() => openAddEntilement(user.userId)}
                  >
                    Entitlements
                  </button>
                )}
                {/* {auth?.role === 'ADMIN' && (
                  <button
                    className="ms-2 btn btn-info btn-sm"
                    aria-label="View Entitlement"
                  >
                    View
                  </button>
                )} */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <Modal
          isOpen={isOpen}
          onRequestClose={closeModal}
          ariaHideApp={false}
          style={styles.modalStyles}
          contentLabel="Add Entilement"
        >
          <div className="d-flex justify-content-between">
            <div>
              <h2>User: {user}</h2>
            </div>
            <div>
              <button
                className="btn btn-outline-primary btn-sm"
                onClick={closeModal}
              >
                x
              </button>
            </div>
          </div>
          <AccountsTable
            accounts={entAccounts}
            actionEnabled={true}
            handleAction={changeEntitlements}
          />
        </Modal>
      </div>
    </div>
  );
};

export default Users;
