import React, { useState} from "react";
import "./ExpenseForm.css"
import { useState } from "react";

const ExpenseForm = () => {

    const [title, setTitle] = useState("")
    const [amount, setAmount] = useState(0);
    const [date, setDate] = useState(new Date())

    const titleChangeHandler = (e) => {
        setTitle(e.target.value)
    }

    const amountChangeHandler = (e) => {
        setAmount(e.target.value)
    }

    const dateChangeHandler = (e) => {
        setDate(e.target.value)
    }

    return(
        <form className="new-expense__controls">
            <div className="new-expense__control">
                <label>title</label>
                <input type="text" onChange={titleChangeHandler} />
            </div>
            <div className="new-expense__control">
                <label>amount</label>
                <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler} />
            </div>
            <div className="new-expense__control">
                <label>date</label>
                <input type="date" min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler}/>
            </div>
            <div className="new-expense__actions"><button type="submit">Add Expense</button></div>
        </form>
    )
}

export default ExpenseForm