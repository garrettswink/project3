// Import Files
import './ExpenseItem.css';

// Import Components
import {ExpenseDate} from "./ExpenseDate";
import {Card} from "../CardComponents/Card";

// ExpenseItem Function
export function ExpenseItem(props) {
    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date} />
            <div className='expense-item-description'>
                <h2>{props.title}</h2>
                <div className='expense-item-price'>${props.amount}</div>
            </div>
        </Card>
    );
}