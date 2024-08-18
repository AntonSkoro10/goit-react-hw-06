import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/filtersSlice';

export default function SearchBox() {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filters.filter);

  const handleChange = event => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <input
      type="text"
      placeholder="Пошук"
      value={filter} // Встановлюємо значення інпуту на поточний фільтр
      onChange={handleChange}
    />
  );
}
