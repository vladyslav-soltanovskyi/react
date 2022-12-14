import React from "react";

function CartTitle ({ count, userName }) {
  return (
    <div className="cart-title">{userName}, you added {count} items</div>
  );
}

export default CartTitle;
