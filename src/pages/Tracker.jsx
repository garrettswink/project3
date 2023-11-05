
import { AddExpense } from "../components/AddExpenseComponents/AddExpense"
import "../styles/Tracker.css";

export default function Tracker() {
  return (
    <>
    <div className="title-container">
      <h1>Tracker</h1>
      </div>
      <div className="parent-container">
      <AddExpense></AddExpense>
      </div>
    </>
  );
}
