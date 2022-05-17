import React from "react";
import ExpenseItem from "./ExpenseItem.js";
import "./Expenses.css"
import Card from "../UI/Card.js";

const Expenses = (props) => {

    return(
        <Card className="expenses">
        {
            props.expenses.map(expense => {
                return (
                    <ExpenseItem title={expense.title} amount={expense.amount} date={expense.date} />
                )
            })
        }
        </Card>
    )
}

export default Expenses;