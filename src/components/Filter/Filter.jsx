import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterAction } from '../../redux/contactSlice';
import './Filter.css';

function Filter() {
  const dispatch = useDispatch();
  const filterValue = useSelector(state => state.contact.filter);

  const changeFilter = evt => dispatch(filterAction(evt.currentTarget.value));

  return (
    <input
      type="text"
      name="filter"
      value={filterValue}
      onChange={changeFilter}
    />
  );
}

export default Filter;
