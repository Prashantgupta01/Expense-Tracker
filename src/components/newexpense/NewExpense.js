import React, { useState } from 'react'
import ExpenseForm from './ExpenseForm'

import './NewExpense.css'
// import { useState } from 'react'

function NewExpense(props) {

  const [isEditing, setIsEditing] = useState (false)

  const startEditingHander = () =>{
    setIsEditing(true);
  }

  const saveExpenseDataHandler = (enteredExpenseData) =>{
    const expenseData ={
    ...enteredExpenseData,
    id: Math.random().toString()
    };
    props.onAddExpense(expenseData)
    setIsEditing(false)
  }

  const stopEditingHandler = () => {
    setIsEditing(false)
  }

  return (
    <div className='new-expense'>
       {!isEditing &&<button onClick={startEditingHander}>Add new Expense</button>}
        {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler} />}
    </div>
  )
}
export default NewExpense