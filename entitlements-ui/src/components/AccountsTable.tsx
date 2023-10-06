import { AccountType } from '../reducers/accountsReducer';

type Props = {
  accounts: AccountType[];
  actionEnabled?: boolean;
  handleAction?: (userId: number, isAdd: boolean) => void;
};

const AccountsTable = (props: Props) => {
  return (
    <table className="table" role="table">
      <thead title="header">
        <tr>
          <th>#</th>
          <th>Account Id</th>
          <th>Start Date</th>
          <th>Base Currency</th>
          {props.actionEnabled && <th>Actions</th>}
        </tr>
      </thead>
      <tbody title="rows">
        {props.accounts.map(
          ({ added, accountId, startDt, baseCurrencyCode }, index) => (
            <tr key={`${accountId}_${!added}`}>
              <th>
                {index}{' '}
                {/* {added && <span className="badge text-bg-success">Added</span>}{' '} */}
              </th>
              <td>{accountId}</td>
              <td>{startDt}</td>
              <td>{baseCurrencyCode}</td>
              {props.actionEnabled && (
                <td>
                  {!added ? (
                    <button
                      aria-label="Add Account"
                      title="Add Account"
                      onClick={() =>
                        props.handleAction &&
                        props.handleAction(accountId, true)
                      }
                      className="btn btn-primary btn-sm px-3"
                    >
                      +
                    </button>
                  ) : (
                    <button
                      aria-label="Remove Account"
                      title="Remove Account"
                      onClick={() =>
                        props.handleAction &&
                        props.handleAction(accountId, false)
                      }
                      className="btn btn-danger btn-sm px-3"
                    >
                      -
                    </button>
                    // <span className="badge text-bg-success">Added</span>
                  )}
                </td>
              )}
            </tr>
          )
        )}
      </tbody>
    </table>
  );
};

export default AccountsTable;
