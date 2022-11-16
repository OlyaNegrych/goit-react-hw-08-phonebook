// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchContacts } from 'redux/operations';
// import { getError, getIsLoading } from 'redux/selectors';
import { Route, Routes } from 'react-router-dom';
import { Layout } from 'components/Layout';
import RegisterPage from '../../pages/Register/RegisterPage';
import LoginPage from '../../pages/Login/LoginPage';
// import ContactForm from '../ContactForm/ContactForm';
// import Filter from '../Filter/Filter';
import ContactList from 'components/ContactList/ContactList';
// import Section from '../Section/Section';
import HomePage from 'pages/HomePage';
import NotFound from '../../pages/NotFound';

const App = () => {
  // const dispatch = useDispatch();
  // const isLoading = useSelector(getIsLoading);
  // const error = useSelector(getError);

  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);

    return (
      <div>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/contacts" element={<ContactList />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>

        {/* <Section title="Phonebook">
          <ContactForm />
        </Section>

        <Section title="Contacts">
          <Filter />
          <br />
          {isLoading && !error && <b>Request in progress...</b>}
          <ContactList />
        </Section> */}
      </div>
    );
}

export default App;