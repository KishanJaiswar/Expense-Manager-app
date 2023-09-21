import React, { useState } from 'react'
import './ExpenseForm.css'
export default function ExpenseForm(props) {
    const [enteredTitle, setEnteredTitle] = useState("");
    const [enteredAmount, setEnteredAmount] = useState("");
    const [enteredDate, setEnteredDate] = useState("");

    function titleChangeHandler(e) { setEnteredTitle(e.target.value); }
    function amountChangeHandler(e) { setEnteredAmount(e.target.value) }
    function dateChangeHandler(e) { setEnteredDate(e.target.value) }

    function handleSubmit(e) {
        e.preventDefault();
        var expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };
        props.onSaveExpenseData(expenseData);
        setEnteredTitle("");
        setEnteredAmount("");
        setEnteredDate("");
        document.querySelector('.actualForm').reset();
    }
    return (
        < div className='form'>
            <form action="" onSubmit={handleSubmit} className='actualForm'>
                <input type="text" placeholder='Title' value={enteredTitle} onChange={titleChangeHandler} />
                <input type="number" placeholder='Amount' min="1" value={enteredAmount} onChange={amountChangeHandler} />
                <input type="date" placeholder='Date' min='2021-12-31' max='2023-12-31' value={enteredDate} onChange={dateChangeHandler} />
                <button type='submit'>Add Expense</button>
            </form>
        </div>
    )
}
