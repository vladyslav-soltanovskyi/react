import React from "react";
import CartTitle from "./CartTitle";
import ProductsList from "./ProductsList";

class ShoppingCart extends React.Component {
  state = {
    items: [{ id: '1', name: 'iPhone 11', price: 999 }, { id: '2', name: 'iPad Pro', price: 799 }]
  }

  render() {
    const { items } = this.state;
    const { userName } = this.props;
    const totalPrice = items.reduce((total, item) => total + item.price, 0);
    return (
      <div className="column">
        <CartTitle userName={userName} count={items.length} />
        <ProductsList cartItems={items} total={totalPrice} />
      </div>
    );
  }
}

export default ShoppingCart;
