import { useState } from "react";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseList from "./ExpenseList";
import Card from "../Card";
import ExpensesChart from "./ExpensesChart";
const Expenses = (props) => {
  const [enteredYear, setEnteredYear] = useState("2020");
  const onSelectHandler = (selectedYear) => {
    setEnteredYear(selectedYear);
  };

  const filteredExpense = props.item.filter((expense) => {
    return expense.date.getFullYear().toString() === enteredYear;
  });
  return (
    <Card className="expenses">
      <ExpensesChart expenses={filteredExpense} />
      <ExpensesFilter selected={enteredYear} onClickYear={onSelectHandler} />
      <ExpenseList items={filteredExpense} />
    </Card>
  );
};
export default Expenses;
