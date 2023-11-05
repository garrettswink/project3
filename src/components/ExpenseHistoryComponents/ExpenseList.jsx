// File Imports
import "./ExpensesList.css"

// Component Imports
import {ExpenseItem} from "./ExpenseItem";

// Returns Filtered Expense Itmes
export function ExpensesList(props) {

    // If the array is empry, return the JSX output
    if (props.items.length === 0) {
        return <h2 className="expenses-list-err">No Expenses</h2>
    }

    return (
        <ul className="expense-list">
            {props.items.map(e => (
                <ExpenseItem
                    key={e.id}
                    title={e.title}
                    amount={e.amount}
                    date={e.date}
                />
            ))}
        </ul>
    )
}