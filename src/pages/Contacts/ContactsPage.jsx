import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ContactForm from '../../components/Contacts/ContactForm/ContactForm';
import Filter from '../../components/Contacts/Filter/Filter';
import ContactList from 'components/Contacts/ContactList/ContactList';
import Section from '../../components/Section/Section';
import { fetchContacts } from '../../redux/contacts/operations';
import { selectError, selectIsLoading } from '../../redux/contacts/selectors';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <Section title="Phonebook">
        <ContactForm />
      </Section>

      <Section title="Contacts">
        <Filter />
        <br />
        {isLoading && !error && <b>Request in progress...</b>}
        <ContactList />
      </Section>
    </div>
  );
};

export default ContactsPage;
