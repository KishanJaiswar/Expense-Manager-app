import React, { useState } from 'react'
import './Expense.css'
import ExpenseItem from './ExpenseItem'
import ExpenseFilter from './ExpenseFilter'
import Card from './Card'

export default function Expense({ expenses }) {
  const [filteredYear, setFilteredYear] = useState('2023');

  let filterInfoText = "2019, 2021 & 2022";
  if (filteredYear === "2019") {
    filterInfoText = "2020, 2021 & 2022";
  } else if (filteredYear === "2020") {
    filterInfoText = "2019, 2021 & 2022";
  } else if (filteredYear === '2021') {
    filterInfoText = "2019, 2020 & 2022";
  }
  function filterHandler(e) {
    setFilteredYear(e);
    
  }
  const filteredExpenses = expenses.filter((item) => {
    if (item.date.getFullYear().toString() === filteredYear) {
      return true;
    } else {
      return false;
    }
  });
  return (
    <div className='cardHolder'>
      <Card className="expenses">
        <ExpenseFilter onChangeFilter={filterHandler} selected={filteredYear} />
        <p>Data for year {filterInfoText} is hidden.</p>
        {filteredExpenses.map(({ id, title, amount, date }) => (
          <ExpenseItem key={id} title={title} amount={amount} date={date} />
        ))}
      </Card>
    </div>
  )
}
