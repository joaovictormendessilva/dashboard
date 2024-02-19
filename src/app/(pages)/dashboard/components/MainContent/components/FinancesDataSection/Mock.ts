import { dataResult } from "./Types";

export const data: dataResult[] = [
  {
    id: 1,
    date: "2023-05-01",
    transaction_type: "Expenses",
    description: "Office Supplies",
    amount: 250,
    category: "Office Expenses",
    status: "pending",
  },
  {
    id: 2,
    date: "2023-05-02",
    transaction_type: "Income",
    description: "Client Payment",
    amount: 500,
    category: "Sales",
    status: "Completed",
  },
  {
    id: 3,
    date: "2023-05-03",
    transaction_type: "Expense",
    description: "Travel Expenses",
    amount: 250,
    category: "Travel",
    status: "Approved",
  },
];
