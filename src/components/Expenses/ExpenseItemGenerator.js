import './ExpenseItemGenerator.css';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter';
import ExpensesList from './ExpensesList'
import ExpensesChart from './ExpensesChart';
import { useEffect, useState } from 'react'
import Card from '../UI/Card';

function ExpenseItemGenerator(props) {
    const [rows, setRows] = useState('')
    const [years, setYears] = useState('')

    useEffect(() => {
        if (props.data.filter(res => { return res.date.toString().includes(years) }).length!=rows.length) {
            setRows(props.data.filter(res => { return res.date.toString().includes(years) }).map((res, index) => {
                return <ExpenseItem
                    key={res.date + index}
                    date={res.date}
                    amount={res.amount}
                    title={res.title}
                />
            }))
        }
        console.log('row ',rows)
    })

    const yearSelected = (year) => {
        setYears(year);
        setRows(props.data.filter(res => { return res.date.toString().includes(year) }).map((res, index) => {
            return <ExpenseItem
                key={res.date + index}
                date={res.date}
                amount={res.amount}
                title={res.title}
            />
        }))
    }
    return (
        <Card className='expenses'>
            <ExpensesFilter onExpenseYearFilter={yearSelected} />
            <ExpensesChart
            expenses={rows}/>
            <ExpensesList
            rows={rows}/>
        </Card>)
}

export default ExpenseItemGenerator;