import { createAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const addContact = createAction('contacts/add', (name, number) => {
  return {
    payload: {
      id: uuidv4(),
      name,
      number,
    },
  };
});

const changeFilter = createAction('contacts/change');

const deleteContact = createAction('contacts/delete');

const contactsActions = { addContact, deleteContact, changeFilter };

export default contactsActions;
