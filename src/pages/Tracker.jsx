
import { AddExpense } from "../components/AddExpenseComponents/AddExpense"

import {useState} from "react";

export default function Tracker() {

 
  return (

    <>
    <div className="title-container">
      <h1>Tracker</h1>
      </div>
      <div className="parent-container">
    <AddExpense />
  
    
      </div>
    </>
  );
}
