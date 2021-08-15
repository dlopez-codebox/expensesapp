import "./ExpenseForm.css";

import React, { useState } from "react";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setenteredDate] = useState("");

  

  const submitHandler = (evt) => {
    evt.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);

    setEnteredTitle("");
    setEnteredAmount("");
    setenteredDate("");


  };

  const titleChangeHandler = (evt) => {
    setEnteredTitle(evt.target.value);
  };
  const amountChangeHandler = (evt) => {
    setEnteredAmount(evt.target.value);
  };
  const dateChangeHandler = (evt) => {
    setenteredDate(evt.target.value);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense_control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense_control">
          <label>Amout</label>
          <input type="number" onChange={amountChangeHandler} />
        </div>
        <div className="new-expense_control">
          <label>Date</label>
          <input type="date" onChange={dateChangeHandler} />
        </div>
        <div className="new-expense_actions">
          <button type="button" onClick={props.onCancel}>
            Cancel
          </button>
          <button type="submit"> Add Expense</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
