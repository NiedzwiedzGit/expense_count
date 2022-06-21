import './NewExpenses.css'
import ExpenseForm from './ExpenseForm'
function NewExpenses(props) {
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Date.now()
        }
        props.onAddExpense(expenseData)
    }

    return (
        <div className='new-expense'>
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
        </div>)
}

export default NewExpenses;