import React from "react";
import moment from "moment";

const formatter = new Intl.NumberFormat('en-GB');

function Transaction({ from, to, amount, rate, time }) {
  const momentDate = moment(time);

  return (
    <li className="transaction">
      <span className="transaction__date">{momentDate.format("DD MMM")}</span>
      <span className="transaction__time">{momentDate.format("HH:mm")}</span>
      <span className="transaction__assets">{from} → {to}</span>
      <span className="transaction__rate">{rate}</span>
      <span className="transaction__amount">{formatter.format(amount)}</span>
    </li>
  );
}

export default Transaction;
