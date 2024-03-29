import ExpenseItemGenerator from './components/Expenses/ExpenseItemGenerator'
import NewExpenses from './components/NewExpenses/NewExpenses'
import { useState } from 'react'
function App() {
  // const expense = [
  //   { date: new Date, amount: '599 pln', title: 'test1' },
  //   { date: new Date, amount: '699 pln', title: 'test2' },
  //   { date: new Date, amount: '799 pln', title: 'test3' }
  // ]
  const [expense, setExpense] = useState([
    { date: new Date(2020, 7, 14), amount: 599, title: 'test1', id: Date.now() },
    { date: new Date(2022, 7, 14), amount: 699, title: 'test2', id: Date.now() },
    { date: new Date(2022, 7, 14), amount: 799, title: 'test3', id: Date.now() }
  ])
  const addExpenseHandler = (expnce) => {
    setExpense([expnce,...expense])
  }
  return (
    <div>
      <NewExpenses onAddExpense={addExpenseHandler} />
      <ExpenseItemGenerator
        onRefreshExpense={addExpenseHandler}
        data={expense} />
    </div>
  );
}

export default App;
