import React from "react";
import moment from "moment";

const formattingAmount = (amount) => new Intl.NumberFormat('en-GB').format(amount);

const formattingTime = (date) => moment(date).format("DD MMM");

const formattingDate = (date) => moment(date).format("HH:mm");

function Transaction({ from, to, amount, rate, time }) {

  return (
    <li class="transaction">
    <span class="transaction__date">{formattingTime(time)}</span>
    <span class="transaction__time">{formattingDate(time)}</span>
    <span class="transaction__assets">{from} → {to}</span>
    <span class="transaction__rate">{rate}</span>
    <span class="transaction__amount">{formattingAmount(amount)}</span>
  </li>
  );
}

export default Transaction;
