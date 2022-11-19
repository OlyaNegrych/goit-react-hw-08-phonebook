import { useSelector } from 'react-redux';
import ContactItem from './ContactItem';
import { selectVisibleContacts } from 'redux/contacts/selectors';

const ContactList = () => {
  const visibleContacts = useSelector(selectVisibleContacts);
 
  return (
    <ul style={{padding: 0}}>
      {visibleContacts.map(({ id, name, number }) => (
        <ContactItem key={id} name={name} number={number} id={id} />
      ))}
    </ul>
  );
};

export default ContactList;
