import {useEffect, lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from 'components/Layout/Layout';
import { useDispatch } from 'react-redux';
import { PrivateRoute } from '../PrivateRoute';
import { RestrictedRoute } from '../RestrictedRoute';
import { refreshUser } from '../../redux/auth/operations';
import { useAuth } from 'hooks';
import NotFound from '../../pages/NotFound';

// const HomePage = lazy(() => import('../../pages/HomePage'));
const ContactsPage = lazy(() => import('../../pages/Contacts/ContactsPage'));
const RegisterPage = lazy(() => import('../../pages/Register/RegisterPage'));
const LoginPage = lazy(() => import('../../pages/Login/LoginPage'));

const App = () => {
 const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* <Route index element={<HomePage />} /> */}
        <Route index element={<Navigate to="/login" replace />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<RegisterPage />}
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
