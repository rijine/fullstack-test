import { Route, Routes } from 'react-router-dom';

import './App.css';
import { useAuth } from './hooks/useAuth';
import { HomeLayout, ProtectedRoute, RootLayout } from './components';
import { Accounts, Entitlements, Login, Users } from './containers';

function App() {
  const { auth } = useAuth();

  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route path="/login" element={<Login />} />
        <Route element={<ProtectedRoute isAllowed={!!(auth && auth?.role)} />}>
          <Route path="/" element={<HomeLayout />}>
            <Route path="/accounts" element={<Accounts />} />
            <Route path="/users" element={<Users />} />
            <Route path="/entitlements" element={<Entitlements />} />
          </Route>
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
