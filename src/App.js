import { useState } from 'react';

import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const expenses_pred = [
  {
    id: "001",
    title: 'Expense 1',
    amount: 100,
    date: new Date(2022,7,14),
  },
  {
    id: "002",
    title: 'Expense 2',
    amount: 25,
    date: new Date(2020,8,20),
  },
  {
    id: "003",
    title: 'Expense 3',
    amount: 40,
    date: new Date(2021,2,10),
  },
  {
    id: "004",
    title: 'Expense 4',
    amount: 60,
    date: new Date(2022,10,28),
  },
];

function App() {
  const [expenses, setExpenses] = useState(expenses_pred);
  
  const addExpenseHandler = (expense) =>{
    setExpenses((prevExpenses)=>{
      return [expense, ...prevExpenses];
    });
  };
  
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
