import React from "react";
import "./ProductCard.scss";

const ProductCard = (props) => {
  const product = props.product;

  return (
    <a className="product-card">
      <img className="product-img" src={product.productImage} />
      <div className="contentBox">
        <h3 className="product-name" >{product.productName}</h3>
        <h2 className="price">{product.productPrice}VND</h2>
        <a onClick={() => props.handleBuy()} className="buy-btn">Mua ngay</a>
      </div>
    </a>
  );
};

export default ProductCard;