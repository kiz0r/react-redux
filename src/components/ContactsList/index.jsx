import { connect } from 'react-redux';
import { removeContact, updateContact } from '../../store/slices/contactsSlice';

const ContactsList = ({ contacts, remove, update }) => {
  const updateContactHandler = (id, isFavourite) => {
    update(id, { isFavourite: !isFavourite });
  };

  return (
    <ul>
      {contacts.map(c => (
        <li
          key={c.id}
          style={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <input
            type='checkbox'
            checked={c.isFavourite}
            onChange={() => updateContactHandler(c.id, c.isFavourite)}
          />
          <span>Name : {c.name}</span>
          <span>Phone : {c.phone}</span>
          <button onClick={() => remove(c.id)}>X</button>
        </li>
      ))}
    </ul>
  );
};

const mapStateToProps = ({ contactsList }) => contactsList;

const mapDispatchToProps = dispatch => ({
  remove: id => dispatch(removeContact(id)),
  update: (id, updatedData) => dispatch(updateContact({ id, updatedData })),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);
