import React, { useContext } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { ProductContext } from "./Context";

const Home = () => {
  const countContext = useContext(ProductContext);
  return (
    <>
      <div className="nav">
        <ul>
          <li>
            <Link to="/">Products</Link>
          </li>

          {/* <li>
            <Link to="/createuser">Create User</Link>
          </li> */}

          <li>
            <sup className="cartCircle">{countContext.product.length}</sup>
            <Link to="/cart_products">
              <AiOutlineShoppingCart />
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Home;
