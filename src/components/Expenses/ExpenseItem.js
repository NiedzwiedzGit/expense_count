import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import {useState} from 'react'
import './ExpenseItem.css';

function ExpenseItem(props) {

const [title, setTitle]=useState(props.title);

const clickHandler=()=>{
     setTitle('work')
}
setTimeout(clickHandler, 5000);
    return (
        <Card className='expense-item'>
            <ExpenseDate
                key={props.date.getTime()}
                date={props.date}
            />
            <div className='expense-item__description' >
                <h2>{title}</h2>
                <div className='expense-item__price'>{props.amount}</div>
            </div>
            <input type="text" onChange={(e)=>{setTitle(e.target.value)}}></input>
            <button onClick={()=>{setTitle('work')}}>Change Title</button>
        </Card>)
}

export default ExpenseItem;