import React from "react";
import ExpenseItem from "./ExpenseItem.js";
import "./Expenses.css"

const Expenses = (props) => {

    return(
        <div className="expenses">
        {
            props.expenses.map(expense => {
                return (
                    <ExpenseItem title={expense.title} amount={expense.amount} date={expense.date} />
                )
            })
        }
        </div>
    )
}

export default Expenses;