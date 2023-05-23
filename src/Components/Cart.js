import React, { useContext } from "react";
import { ProductContext } from "./Context";
import Home from "./Home";
import {
  AiFillCloseCircle,
  AiFillMinusCircle,
  AiFillPlusCircle,
} from "react-icons/ai";
import { GiCardboardBox } from "react-icons/gi";

const Cart = () => {
  const cartList = useContext(ProductContext);
  let total = 0;
  const handleDecrement = (id) => {
    cartList.changeProduct((product) =>
      product.map((val) =>
        id === val.id
          ? { ...val, quantity: val.quantity - (val.quantity > 1 ? 1 : 0) }
          : val
      )
    );
  };
  const handleIncrement = (id) => {
    cartList.changeProduct((product) =>
      product.map((val) =>
        id === val.id
          ? { ...val, quantity: val.quantity + (val.quantity < 10 ? 1 : 0) }
          : val
      )
    );
  };

  // const delProduct = (id) => {
  //   const copy = cartList.product.filter((item) => item.id !== id);
  //   cartList.changeProduct(copy);
  // };
  return (
    <>
      <Home />
      <div className="heading">
        <h1>Shopping Cart</h1>
        <p>
          You have
          <span>
            <GiCardboardBox />
          </span>
          {cartList.product.length} items in cart
        </p>
      </div>
      <div className="cart">
        <div className="list-1">
          <h3 className="img-width">Image</h3>
          <h3 className="product-name">Product Name</h3>
          <h3 className="qty-product">Quantity</h3>
          <h3 className="price-product">Price</h3>
          <h3 className="tprice-product">Total Price</h3>
          <h3 className="remove-product">Remove Product</h3>
        </div>

        {cartList.product.map((value) => {
          total += Number(value.price * value.quantity);
          return (
            // console.log(value)
            <div className="list" key={value.id}>
              <div className="imgBox">
                <img src={value.image} alt="mouse corsair" className="mouse" />
              </div>
              <div className="contentBox">
                <h3>{value.itemname}</h3>

                <h3>
                  Qty:
                  <AiFillMinusCircle
                    className="icons-font"
                    onClick={() => handleDecrement(value.id)}
                  />
                  {value.quantity}
                  <AiFillPlusCircle
                    className="icons-font"
                    onClick={() => handleIncrement(value.id)}
                  />
                </h3>

                <h3 className="price">₹{value.price}</h3>

                <h3 className="price">₹{value.price * value.quantity}</h3>
                <a
                  href="#"
                  className="buy"
                  onClick={() => {
                    cartList.productDel(value.id);
                  }}
                >
                  <AiFillCloseCircle />
                </a>
              </div>
            </div>
          );
        })}
      </div>
      <div className="checkout">
        <div className="btn">Checkout</div>
        <div className="price-checkout">
          <p>₹{total}</p>
        </div>
      </div>
    </>
  );
};

export default Cart;
