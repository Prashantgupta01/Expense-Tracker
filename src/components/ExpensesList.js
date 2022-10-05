import React from 'react'

import './ExpensesList.css'

import ExpenseItem from './ExpenseItem';

 function ExpensesList(props) {
  
    // let expenseContent = <p>No expense found.</p>;

    if (props.items.length === 0) {
      return <h2 className='expenses-list__fallback '>found no Expenses</h2>
    }
  
return <ul className='expenses-list'>
{    props.items.map((expense) => (
    <ExpenseItem
      key={expense.id}
      title={expense.title}
      amount={expense.amount}
      date={expense.date}
    />
    ))
    }
</ul>

}
export default ExpensesList
