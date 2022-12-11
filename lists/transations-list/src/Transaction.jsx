import React from "react";

const formattingAmount = (amount) => new Intl.NumberFormat('en-GB').format(amount);

const formattingTime = (date) => new Intl.DateTimeFormat('en-GB', {
  minute: 'numeric',
  hour: 'numeric',
  timeZone: 'Europe/Kyiv'
}).format(new Date(date));

const formattingDate = (date) => new Intl.DateTimeFormat('en-GB', {
  day: 'numeric',
  month: 'short',
  timeZone: 'Europe/Kyiv'
}).format(new Date(date));

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
