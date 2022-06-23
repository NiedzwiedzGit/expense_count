import './Chart.css'
import ChartBar from './ChartBar'


const Chart = (props) => {
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value)
    const totalMaximum = Math.max(...dataPointValues)
    return <div className='chart'>
        {props.dataPoints.map(res =>{
            return <ChartBar
                key={res.lable}
                value={res.value}
                maxValue={totalMaximum}
                lable={res.lable} />})}
    </div>
}

export default Chart;