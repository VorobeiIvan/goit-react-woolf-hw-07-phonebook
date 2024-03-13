import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../store/slice';
import { selectFilter } from '../store/slice';
const Filter = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(selectFilter);
  const handleChangeFilter = event => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <div className="wrapper">
      <label className="label">Find contact by name</label>
      <input
        className="input"
        type="text"
        name="filter"
        value={filterValue}
        onChange={handleChangeFilter}
        pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        placeholder="Enter the contact you are looking for"
      />
    </div>
  );
};

export default Filter;
