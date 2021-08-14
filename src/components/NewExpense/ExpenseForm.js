import './ExpenseForm.css'

import React from "react";

const ExpenseForm = () => {
  const submitHandler = (evt) => {
    evt.preventDefault();
    console.log("Submit");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense_control">
          <label>Title</label>
          <input type="text" />
        </div>
        <div className="new-expense_control">
          <label>Amout</label>
          <input type="number" />
        </div>
        <div className="new-expense_control">
          <label>Date</label>
          <input type="date" />
        </div>
        <div className="new-expense_actions">
          <button type="button">Cancel</button>
          <button type="submit"> Add Expense</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
