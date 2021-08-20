import { useSelector, useDispatch } from 'react-redux';
import styles from './PhoneBook.module.css';
import * as actions from '../../redux/contact-actions';
import { filteredContacts } from '../../redux/contact-selectors';

const PhoneBook = () => {

  const contact = useSelector(filteredContacts);
  const dispatch = useDispatch();

  const onDeleteContact = contactId => {
    dispatch(actions.deleteContact(contactId))
  };

  return (
    <ul className={styles.list}>
      {contact.map(({ id, name, number }) => (
        <li className={styles.item} key={id}>
          <span>{name}:</span> <span>{number}</span>
          <button className={styles.button} onClick={() => { onDeleteContact(id) }}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

// const mapStateToProps = ({ contact: { contacts, filter }}) => ({
//   contact: filteredContacts(contacts, filter),
// });

// const mapDispatchToProps = dispatch => ({
//     onDeleteContact: contactId => dispatch(actions.deleteContact(contactId)),
//   })

export default PhoneBook;