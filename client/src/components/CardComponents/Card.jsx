import React from "react";
import "../CardComponents/Card.css";

export function Card() {
    
  const expenseData = {
    date: "2023-11-06",
    category: "Groceries",
    expense: "Whole Foods Market",
    amount: 123.45,
  };

  return (
    <div className="expense-card">
    <div className="expense-date">{expenseData.date}</div>
    <div className="expense-category">{expenseData.category}</div>
    <div className="expense-description">{expenseData.expense}</div>
    <div className="expense-amount">{expenseData.amount.toFixed(2)}</div>
      
    </div>
  );
}
