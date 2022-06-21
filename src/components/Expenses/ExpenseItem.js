import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import { useState } from 'react'
import './ExpenseItem.css';

function ExpenseItem(props) {

    const [title, setTitle] = useState(props.title);
    return (
        <li>
            <Card className='expense-item'>
                <ExpenseDate
                    key={props.date.getTime()}
                    date={props.date}
                />
                <div className='expense-item__description' >
                    <h2>{title}</h2>
                    <div className='expense-item__price'>{props.amount}</div>
                </div>
            </Card>
        </li>)
}

export default ExpenseItem;