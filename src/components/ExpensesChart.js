import React from 'react'
import Chart from '../chart/Chart'

export default function ExpensesChart(props) {


    const ChartDataPoints = [
        { label: 'Jan', value: 0 },
        { label: 'Feb', value: 0 },
        { label: 'Mar', value: 0 },
        { label: 'Apr', value: 0 },
        { label: 'May', value: 0 },
        { label: 'Jun', value: 0 },
        { label: 'Jul', value: 0 },
        { label: 'Aug', value: 0 },
        { label: 'Sep', value: 0 },
        { label: 'Oct', value: 0 },
        { label: 'Nov', value: 0 },
        { label: 'Dec', value: 0 },
    ]
    console.log(props.expenes)

    for(const expense of props.expenes){
        const expenseMonth = expense.date.getMonth();
        console.log(expense)
        ChartDataPoints[expenseMonth].value += expense.amount;
    }
     console.log(ChartDataPoints)
  return (
    <Chart dataPoints={ChartDataPoints} />
    
  )
}
