import React from "react";
import moment from "moment";

const formattingAmount = (amount) => new Intl.NumberFormat('en-GB').format(amount);

const formattingDate = (date) => moment(date).locale('en-GB').format("DD MMM");

const formattingTime = (date) => moment(date).locale('en-GB').format("HH:mm");

function Transaction({ from, to, amount, rate, time }) {

  return (
    <li className="transaction">
      <span className="transaction__date">{formattingDate(time)}</span>
      <span className="transaction__time">{formattingTime(time)}</span>
      <span className="transaction__assets">{from} → {to}</span>
      <span className="transaction__rate">{rate}</span>
      <span className="transaction__amount">{formattingAmount(amount)}</span>
    </li>
  );
}

export default Transaction;
