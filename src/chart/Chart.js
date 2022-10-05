import React from 'react'

import ChartBar from './ChartBar'

import './Chart.css'

export default function chart(props) {
    
    const dataPointsValues = props.dataPoints.map(dataPoint => dataPoint.value)
    console.log(dataPointsValues)
    const totalMaximum = Math.max(...dataPointsValues);

  return (
    <div className='chart'>
        {props.dataPoints.map(dataPoints => <ChartBar value={dataPoints.value} maxValue={totalMaximum} label={dataPoints.label} key={dataPoints.label} />)}
    </div>
  )
}
