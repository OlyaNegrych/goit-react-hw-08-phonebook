import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, updateContact } from 'redux/contacts/operations';
import { DeleteBtn } from './ContactList.styled';
import { ContactItem } from './ContactList.styled';
import { selectVisibleContacts } from 'redux/contacts/selectors';

const ContactList = () => {
  const dispatch = useDispatch();
  const visibleContacts = useSelector(selectVisibleContacts);

  const handleUpdateContact = id => {
    dispatch(updateContact(id));
  };

const handleDeleteContact = id => {
  dispatch(deleteContact(id));
};
  
  return (
    <ul>
      {visibleContacts.map(({ id, name, number }) => (
        <ContactItem key={id}>
          {name}: {number}
          <DeleteBtn type="button" onClick={() => handleUpdateContact(id)}>
            Edit
          </DeleteBtn>
          <DeleteBtn type="button" onClick={() => handleDeleteContact(id)}>
            Delete
          </DeleteBtn>
        </ContactItem>
      ))}
    </ul>
  );
};

export default ContactList;
