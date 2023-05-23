import React, { useContext } from "react";
import Home from "./Components/Home";
import { ProductContext } from "./Components/Context";
import { Link } from "react-router-dom";

const HomePage = () => {
  const usingContext = useContext(ProductContext);

  return (
    <>
      <Home />
      <div className="home">
        <div className="card">
          <div className="imgBox">
            <img
              src={usingContext.data[0].image}
              alt="mouse corsair"
              className="mouse"
            />
          </div>

          <div className="contentBox">
            <h3>{usingContext.data[0].itemname}</h3>
            <h2 className="price">₹{usingContext.data[0].price}</h2>

            {usingContext.showAdd ? (
              <a
                href="#ProductAdded"
                className="buy"
                onClick={() => {
                  usingContext.productAdd(
                    usingContext.data[0].id,
                    usingContext.data[0].itemname,
                    usingContext.data[0].price,
                    usingContext.data[0].image,
                    usingContext.data[0].quantity
                  );
                  usingContext.changeShow();
                }}
              >
                Add To Cart
              </a>
            ) : (
              <Link to="/cart_products" className="buy">
                GO TO CART ({usingContext.product.length})
              </Link>
            )}
          </div>
        </div>

        <div className="card-1">
          <div className="imgBox">
            <img
              src={usingContext.data[1].image}
              alt="Cabinet corsair"
              className="mouse"
            />
          </div>

          <div className="contentBox">
            <h3>{usingContext.data[1].itemname}</h3>
            <h2 className="price">₹{usingContext.data[1].price}</h2>

            {usingContext.showAddtwo ? (
              <a
                href="#ProductAdded"
                className="buy"
                onClick={() => {
                  usingContext.productAdd(
                    usingContext.data[1].id,
                    usingContext.data[1].itemname,
                    usingContext.data[1].price,
                    usingContext.data[1].image,
                    usingContext.data[1].quantity
                  );
                  usingContext.changeShowtwo();
                }}
              >
                Add To Cart
              </a>
            ) : (
              <Link to="/cart_products" className="buy">
                GO TO CART ({usingContext.product.length})
              </Link>
            )}
          </div>
        </div>

        <div className="card-2">
          <div className="imgBox">
            <img
              src={usingContext.data[2].image}
              alt="Keyboard corsair"
              className="mouse"
            />
          </div>

          <div className="contentBox">
            <h3>{usingContext.data[2].itemname}</h3>
            <h2 className="price">₹{usingContext.data[2].price}</h2>

            {usingContext.showAddthree ? (
              <a
                href="#ProductAdded"
                className="buy"
                onClick={() => {
                  usingContext.productAdd(
                    usingContext.data[2].id,
                    usingContext.data[2].itemname,
                    usingContext.data[2].price,
                    usingContext.data[2].image,
                    usingContext.data[2].quantity
                  );
                  usingContext.changeShowthree();
                }}
              >
                Add To Cart
              </a>
            ) : (
              <Link to="/cart_products" className="buy">
                GO TO CART ({usingContext.product.length})
              </Link>
            )}
          </div>
        </div>

        <div className="card-3">
          <div className="imgBox">
            <img
              src={usingContext.data[3].image}
              alt="Chair corsair"
              className="mouse"
            />
          </div>

          <div className="contentBox">
            <h3>{usingContext.data[3].itemname}</h3>
            <h2 className="price">₹{usingContext.data[3].price}</h2>

            {usingContext.showAddfour ? (
              <a
                href="#ProductAdded"
                className="buy"
                onClick={() => {
                  usingContext.productAdd(
                    usingContext.data[3].id,
                    usingContext.data[3].itemname,
                    usingContext.data[3].price,
                    usingContext.data[3].image,
                    usingContext.data[3].quantity
                  );
                  usingContext.changeShowfour();
                }}
              >
                Add To Cart
              </a>
            ) : (
              <Link to="/cart_products" className="buy">
                GO TO CART ({usingContext.product.length})
              </Link>
            )}
          </div>
        </div>

        <div className="card-4">
          <div className="imgBox">
            <img
              src={usingContext.data[4].image}
              alt="Monitor corsair"
              className="mouse"
            />
          </div>

          <div className="contentBox">
            <h3>{usingContext.data[4].itemname}</h3>
            <h2 className="price">₹{usingContext.data[4].price}</h2>

            {usingContext.showAddfive ? (
              <a
                href="#ProductAdded"
                className="buy"
                onClick={() => {
                  usingContext.productAdd(
                    usingContext.data[4].id,
                    usingContext.data[4].itemname,
                    usingContext.data[4].price,
                    usingContext.data[4].image,
                    usingContext.data[4].quantity
                  );
                  usingContext.changeShowfive();
                }}
              >
                Add To Cart
              </a>
            ) : (
              <Link to="/cart_products" className="buy">
                GO TO CART ({usingContext.product.length})
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
