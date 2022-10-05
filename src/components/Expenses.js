import React, { useState } from 'react'

import Card from './Card';

// import ExpenseItem from './ExpenseItem';

import './Abc.css'
import ExpenseFilter from './ExpenseFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

 function Expenses(props) {

  const [filteredYear, setFilteredYear] = useState('2020');

  

  const filterChangeHandler = (slectedYear) => {
    setFilteredYear(slectedYear)
  } 
  
  const fileredExpenses = props.item.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear
  })

 


  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {/* {fileredExpenses.length === 0 ? (
          <p>No expense found.</p>
        ) : (
          fileredExpenses.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))
        )} */}
        <ExpensesChart expenes={fileredExpenses} />
        <ExpensesList items={fileredExpenses}/>
        {/* props.item */}
        {/* {fileredExpenses.map(expense => <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date}/>)} */}
        {/* <ExpenseItem title={props.item[0].title} amount={props.item[0].amount} date={props.item[0].date}  />
    <ExpenseItem title={props.item[1].title} amount={props.item[1].amount} date={props.item[1].date} />
    <ExpenseItem title={props.item[2].title} amount={props.item[2].amount} date={props.item[2].date} />
    <ExpenseItem title={props.item[3].title} amount={props.item[3].amount} date={props.item[3].date} /> */}
      </Card>
    </div>
  );
}
export default Expenses;