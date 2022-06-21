import './ExpensesList.css'
import ExpenseItemGenerator from './ExpenseItemGenerator'

const ExpensesList=(props)=>{
   return props.rows.length!=0?
   <ul className='expenses-list'>{props.rows}</ul>
   :<h2  className='expenses-list__fallback'>Found no expenses.</h2>
}

export default ExpensesList;