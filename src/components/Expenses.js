import "./Expenses.css";

import React, { useState } from "react";

import ExpenseFilter from "./ExpenseFilter/ExpenseFilter";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2021");

  const ChangeHandler = (evt) => {
    setFilteredYear(evt);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div className="expenses">
      <ExpenseFilter selected={filteredYear} onChangeDate={ChangeHandler} />
      <ExpensesList items={filteredExpenses} />
    </div>
  );
};

export default Expenses;
