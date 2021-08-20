import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/contact-actions';
import { getValue } from '../../redux/contact-selectors';
import styles from './Filter.module.css';

const Filter = () => {
  const value = useSelector(getValue);
  const dispatch = useDispatch();

  const onChange = e => dispatch(changeFilter(e.target.value));

  return (
    <label className={styles.search}>
      <span className={styles.title}>
        Find contacts by name
      </span>
      <input className={styles.input} type="text" value={value} onChange={onChange} />
    </label>
  );
};

// const mapStateToProps = (state) => ({
//   value: state.contact.filter
// })

// const mapDispatchToProps = dispatch => ({
//   onChange: (e) => dispatch(changeFilter(e.target.value))
// })

export default Filter;