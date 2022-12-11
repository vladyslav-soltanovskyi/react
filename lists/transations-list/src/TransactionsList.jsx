import React from "react";
import Transaction from "./Transaction";

function TransactionsList({ transactions }) {
  return (
    <ul class="transactions">
      {transactions.map(transaction => <Transaction key={transaction.id} {...transaction} />)}
    </ul>
  );
}

export default TransactionsList;
