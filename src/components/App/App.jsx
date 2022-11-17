import { useEffect, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../../redux/contacts/operations';
import { getError, getIsLoading } from '../../redux/contacts/selectors';
import { Route, Routes } from 'react-router-dom';
import { Layout } from 'components/Layout/Layout';
import ContactForm from '../ContactForm/ContactForm';
import Filter from '../Filter/Filter';
import ContactList from 'components/ContactList/ContactList';
import Section from '../Section/Section';
import NotFound from '../../pages/NotFound';

const HomePage = lazy(() => import('../../pages/HomePage'));
const RegisterPage = lazy(() => import('../../pages/Register/RegisterPage'));
const LoginPage = lazy(() => import('../../pages/Login/LoginPage'));
// const ContactsPage = lazy(() => import('../pages/Tasks'));

const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/contacts"
            element={
              <>
                <Section title="Phonebook">
                  <ContactForm />
                </Section>

                <Section title="Contacts">
                  <Filter />
                  <br />
                  {isLoading && !error && <b>Request in progress...</b>}
                  <ContactList />
                </Section>
              </>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
