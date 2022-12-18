import React from "react";

const Product = ({ match }) => {
  return (
    <div className="product">{match.params.productId}</div>
  );
}

export default Product;