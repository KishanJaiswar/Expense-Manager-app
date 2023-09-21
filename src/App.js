import { useState } from 'react';
import './App.css';
import Expense from './Components/Expenses/Expense'
import NewExpense from './Components/NewExpense/NewExpense';
import Graph from './Components/Chart/Graph';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Legend, Tooltip, TriangleBar, Cell, CartesianGrid } from 'recharts';


const dummyData = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14)
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28)
  },
  {
    id: "e4",
    title: "New Desk",
    amount: 450,
    date: new Date(2021, 5, 12)
  }
];

function App() {
  const [expenses, setExpenses] = useState(dummyData);

  const addExpenseHandler = (expense) => {
    //setExpenses((prevState) => [...prevState, expense]);
    setExpenses([...expenses, expense]);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <div className='graph'>
        <BarChart
          className='barChart'
          width={430}
          height={300}
          data={[...expenses]}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }} >
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="amount" fill="#1a477e" />
        </BarChart>
      </div>
      <Expense expenses={expenses} />
    </div>
  );
}

export default App;
