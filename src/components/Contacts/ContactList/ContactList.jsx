import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { deleteContact, updateContact } from 'redux/contacts/operations';
import { EditBtn, DeleteBtn } from './ContactList.styled';
import { ContactItem } from './ContactList.styled';
import { selectVisibleContacts } from 'redux/contacts/selectors';

const ContactList = () => {
  const dispatch = useDispatch();
  const visibleContacts = useSelector(selectVisibleContacts);
  const [isUpdated, setIsUpdated] = useState(false);
  const [updateName, setUpdateName] = useState('');
  const [updateNumber, setUpdateNumber] = useState('');

  const handleChangeContact = e => {
    const name = e.target.name;
    const value = e.target.value;

    switch (name) {
      case 'name':
        return setUpdateName(value);
      case 'number':
        return setUpdateNumber(value);
      default:
        break;
    }
  };

  const handleUpdateContact = ({ id, name, number }) => {
    setIsUpdated(!isUpdated);
    setUpdateName(name);
    setUpdateNumber(number);

    if (isUpdated) {
      dispatch(
        updateContact({ id, body: { name: updateName, number: updateNumber } })
      );
    }
  };

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  return (
    <ul>
      {visibleContacts.map(({ id, name, number }) => (
        <ContactItem key={id}>
          {isUpdated ? (
            <>
              <input
                type="text"
                name="name"
                value={updateName}
                onChange={handleChangeContact}
              />
              <input
                type="text"
                name="number"
                value={updateNumber}
                onChange={handleChangeContact}
              />
            </>
          ) : (
            <p>
              {name}: {number}
            </p>
          )}

            <EditBtn
              type="button"
              onClick={() => handleUpdateContact({ id, name, number })}
            >
              {isUpdated ? 'Save' : 'Edit'}
            </EditBtn>
        
          <DeleteBtn type="button" onClick={() => handleDeleteContact(id)}>
            Delete
          </DeleteBtn>
        </ContactItem>
      ))}
    </ul>
  );
};

export default ContactList;
