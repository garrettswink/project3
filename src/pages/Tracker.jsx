
import { AddExpense } from "../components/AddExpenseComponents/AddExpense"
import { ExpenseDisplay } from "../components/ExpenseHistoryComponents/ExpenseDisplay";
import "../styles/Tracker.css";

export default function Tracker() {
  return (
    <>
    <div className="title-container">
      <h1>Tracker</h1>
      </div>
      <div className="parent-container">
    <AddExpense/>
    <ExpenseDisplay/>
      </div>
    </>
  );
}
