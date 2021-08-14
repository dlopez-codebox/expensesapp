import "./NewExpense.css";

import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";

const NewExpense = () => {
  const [isEditing, setIsEditing] = useState(false);

  const startAddHandler = () => {
    setIsEditing(true);
  };

  return (
    <div className="new-expense">
      {/* {!isEditing && <button onClick={startAddHandler}>Add New Expense</button>}

      {isEditing && <ExpenseForm />} */}

      {isEditing?<ExpenseForm />:<button onClick={startAddHandler}>Add New Expense</button>}

    </div>
  );
};
export default NewExpense;
