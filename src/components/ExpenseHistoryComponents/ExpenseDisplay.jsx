// React Import
import {useState} from "react";

// React Imports
import {useState} from "react";

// File Import
import './ExpenseDisplay.css'

// Component Imports
import {Card} from "../CardComponents/Card"
import {ExpenseList} from "./ExpenseList";
import {ExpenseChart} from "./ExpenseChart"
import {ExpenseFilter} from "./ExpenseFilter";

// ExpenseDisplay Function
export function ExpenseDisplay (props) {

// Initialize State for Year Filter 
    const [enteredDate, setDate] = useState("2023");

    // Date Selection Handler
    const dateHandler = (date) => {
        setDate(date)
    };

    // Returns filered list per condition.
    // Passed as props.item in ExpenseList
    const filteredExpense = props.items.filter(e => {
        return e.date.getFullYear().toString() === enteredDate
    });

return (
    <div>
        <Card className="expense">
            <ExpenseFilter default={enteredDate} onChangeDate={dateHandler} />
            <ExpenseChart expense={filteredExpense} />
            <ExpenseList items={filteredExpense} />
            </Card>
    </div>
);
}