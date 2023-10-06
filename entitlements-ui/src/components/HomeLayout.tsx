import { Link, Outlet } from 'react-router-dom';
import Timer from './Timer';
import { useAuth } from '../hooks/useAuth';
import { AuthContextType } from '../contexts/AuthContext';

// type Props = {};

const styles = {
  homeLayout: { height: '100vh', width: '100%' },
  contentContainer: { height: '100%' },
};

const HomeLayout = () => {
  const { auth, setAuth } = useAuth() as AuthContextType;

  const logout = () => {
    localStorage.removeItem('user');
    setAuth(null);
  };

  return (
    <div id="homeLayout" style={styles.homeLayout}>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <div className="me-4">Hi, {auth?.name} </div>
          <div className="collapse navbar-collapse d-flex justify-content-end">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" aria-label="Users" to="/users">
                  Users
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-label="Accounts" to="/accounts">
                  Accounts
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  aria-label="Entitlements"
                  to="/entitlements"
                >
                  Entitlements
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to={'/login'}
                  aria-label="Logout"
                  onClick={logout}
                >
                  Logout
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <Timer interval={1000} />
          </div>
        </div>
      </nav>
      <section style={styles.contentContainer}>
        <Outlet />
      </section>
    </div>
  );
};

export default HomeLayout;
