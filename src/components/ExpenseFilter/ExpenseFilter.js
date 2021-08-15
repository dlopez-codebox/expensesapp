import './ExpenseFilter.css'

import React from "react";

function ExpenseFilter(props) {
  const ChangeHandler = (evt) => {
    props.onChangeDate(evt.target.value);
  };

  return (
    <div className='expenses-filter'>
        <div className='expenses-filter__control'>
      <label>Filter By Year</label>
      <select value={props.selected} onChange={ChangeHandler}>
        <option value="2022">2022</option>
        <option value="2021">2021</option>
        <option value="2020">2020</option>
        <option value="2019">2019</option>
      </select>
      </div>
    </div>
  );
}

export default ExpenseFilter;
