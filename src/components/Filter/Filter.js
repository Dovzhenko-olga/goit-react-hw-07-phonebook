import { useSelector, useDispatch } from 'react-redux';
import { contactSelectors, contactActions } from 'redux/contacts';
import styles from './Filter.module.css';

const Filter = () => {
  const value = useSelector(contactSelectors.getValue);
  const dispatch = useDispatch();

  const onChange = e => dispatch(contactActions.changeFilter(e.target.value));

  return (
    <label className={styles.search}>
      <span className={styles.title}>
        Find contacts by name
      </span>
      <input className={styles.input} type="text" value={value} onChange={onChange} />
    </label>
  );
};


export default Filter;