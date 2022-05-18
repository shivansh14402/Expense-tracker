import React, { useState } from "react";
import "./ExpenseItem.css"
import ExpenseDates from "./ExpenseDates.js";
import Card from "../UI/Card.js";

const ExpenseItem = (props) => {

    const month = props.date.toLocaleString("en-US", {month: "long"})
    const day = props.date.toLocaleString("en-US", {day: "2-digit"})
    const year = props.date.getFullYear()

    const titleChanger = () => {
        console.log('update')
    }

    return (
        <Card className="expense-item">
            <ExpenseDates date={props.date} />
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">{props.amount}</div>
            </div>
            <button onClick={titleChanger}>Change Title</button>
        </Card>
    )
}

export default ExpenseItem;