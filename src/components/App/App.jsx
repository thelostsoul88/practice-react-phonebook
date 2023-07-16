import { useDispatch } from 'react-redux';
import { lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router';
import { Layout } from '../Layout/Layout';
import { refreshUser } from '../../redux/auth/operations';
import { useAuth } from '../../hooks/useAuth';
import { Loader } from '../Loader/Loader';
import { PrivateRoute } from '../PrivateRoute/PrivateRoute';
import { PublicRoute } from '../PubliсRoute/PublicRoute';

const HomePage = lazy(() => import('../../pages/HomePage'));
const RegisterPage = lazy(() => import('../../pages/RegisterPage'));
const LoginPage = lazy(() => import('../../pages/LoginPage'));
const ContactsPage = lazy(() => import('../../pages/ContactsPage'));
const ContactDetailsPage = lazy(() => import('../../pages/ContactDetailsPage'));
const InfoPage = lazy(() => import('../../pages/InfoPage'));
const ProfilePage = lazy(() => import('../../pages/ProfilePage'));
const UpdateAvatarPage = lazy(() => import('../../pages/UpdateAvatarPage'));

export default function App() {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Loader />
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="register"
          element={
            <PublicRoute>
              <RegisterPage />
            </PublicRoute>
          }
        />
        <Route
          path="login"
          element={
            <PublicRoute>
              <LoginPage />
            </PublicRoute>
          }
        />
        <Route
          path="contacts"
          element={
            <PrivateRoute>
              <ContactsPage />
            </PrivateRoute>
          }
        />
        <Route
          path="contacts/:id"
          element={
            <PrivateRoute>
              <ContactDetailsPage />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="info"
          element={
            <PrivateRoute>
              <InfoPage />
            </PrivateRoute>
          }
        />
        <Route
          path="profile"
          element={
            <PrivateRoute>
              <ProfilePage />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="profile/update"
          element={
            <PrivateRoute>
              <UpdateAvatarPage />
            </PrivateRoute>
          }
        ></Route>
      </Route>
    </Routes>
  );
}
