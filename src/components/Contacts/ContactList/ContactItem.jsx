import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { deleteContact, updateContact } from 'redux/contacts/operations';
import { EditBtn, DeleteBtn, ContactText } from './ContactList.styled';
import { Contact } from './ContactList.styled';

const ContactItem = ({id, name, number}) => {
  const dispatch = useDispatch();
  const [isUpdated, setIsUpdated] = useState(false);
  const [updateName, setUpdateName] = useState('');
  const [updateNumber, setUpdateNumber] = useState('');

  const handleChangeContact = e => {
    const inputName = e.target.name;
    const inputValue = e.target.value;

    switch (inputName) {
      case 'name':
        return setUpdateName(inputValue);
      case 'number':
        return setUpdateNumber(inputValue);
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
    <Contact key={id}>
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
        <ContactText>
          {name}: {number}
        </ContactText>
      )}

      <div>
        <EditBtn
          type="button"
          onClick={() => handleUpdateContact({ id, name, number })}
        >
          {isUpdated ? 'Save' : 'Edit'}
        </EditBtn>

        <DeleteBtn type="button" onClick={() => handleDeleteContact(id)}>
          Delete
        </DeleteBtn>
      </div>
    </Contact>
  );
};

export default ContactItem;
