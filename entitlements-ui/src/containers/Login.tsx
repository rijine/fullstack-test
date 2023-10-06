import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { loginWithCredentials } from '../api/authApi';
import { AuthType } from '../contexts/AuthContext';

// type Props = {};
const styles = {
  container: {
    display: 'grid',
    gap: '1rem',
    justifyItems: 'center',
    alignItems: 'center',
    minHeight: '300px',
    padding: '2rem 4rem',
    borderRadius: '1rem',
    boxShadow:
      'rgba(50, 50, 93, 0.20) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px',
  },
  loginSection: {
    height: '100%',
    display: 'grid',
    placeItems: 'center',
  },
};

const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState('');
  const [error, setError] = useState('');
  const [password, setPassword] = useState('');
  const { setAuth } = useAuth();

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    const response = await loginWithCredentials(user, password);

    if (!response.success) {
      setError(response.message);
      return;
    }

    const { token, role, name } = response.data as AuthType;
    setAuth({ role, token, name });
    setUser('');
    setPassword('');
    localStorage.setItem('user', JSON.stringify({ role, token, name }));
    navigate('/users', { replace: true });
  };

  return (
    <section style={styles.loginSection}>
      <div style={styles.container}>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <div className="mb-3">
              <label className="form-label" htmlFor="username">
                Email
              </label>
              <input
                className="form-control"
                type="text"
                id="username"
                autoComplete="off"
                onChange={(e) => setUser(e.target.value)}
                value={user}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label" htmlFor="password">
                Password
              </label>
              <input
                className="form-control"
                type="password"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                required
              />
            </div>
            {error && <div className="text-danger"> {error}</div>}
            <div className="d-flex justify-content-end">
              <button className="btn btn-primary">Sign In</button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
