import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/contacts/filterSlice';
import { selectFilter } from '../../../redux/contacts/selectors';
import { FilterLabel, FilterInput } from './Filter.styled';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const changeFilter = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <FilterLabel>
      Find contacts by name
      <br />
      <FilterInput
        type="text"
        value={filter}
        onChange={changeFilter}
      ></FilterInput>
    </FilterLabel>
  );
};

export default Filter;
