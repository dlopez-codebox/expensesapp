import "./NewExpense.css";

import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const startAddHandler = () => {
    setIsEditing(true);
  };

  const stopAddHandler = () => {
    setIsEditing(false);
  };

  const saveExpenseDataHandler = (exteredExpenseData) => {
    const expenseData = {
      ...exteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);

    setIsEditing(false);

    
  };

  return (
    <div className="new-expense">
      {/* {!isEditing && <button onClick={startAddHandler}>Add New Expense</button>}

      {isEditing && <ExpenseForm />} */}

      {isEditing ? (
        <ExpenseForm
          onCancel={stopAddHandler}
          onSaveExpenseData={saveExpenseDataHandler}
        />
      ) : (
        <button onClick={startAddHandler}>Add New Expense</button>
      )}
    </div>
  );
};
export default NewExpense;
