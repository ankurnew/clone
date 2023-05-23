import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const ProductContext = createContext();
const Context = (props) => {
  const file = "http://localhost:3004/products";
  const [data, setData] = useState(file);
  const [product, setProduct] = useState([]);

  // button states....
  const [showAdd, setShowAdd] = useState(true);
  const [showAddtwo, setShowAddtwo] = useState(true);
  const [showAddthree, setShowAddthree] = useState(true);
  const [showAddfour, setShowAddfour] = useState(true);
  const [showAddfive, setShowAddfive] = useState(true);

  useEffect(() => {
    axios.get(file).then((res) => {
      setData(res.data);
      // console.log(res.data);
    });
  }, []);

  const addProduct = (id, itemname, price, image, quantity) => {
    setProduct([
      ...product,
      {
        id: id,
        itemname: itemname,
        price: price,
        image: image,
        quantity: quantity,
      },
    ]);
    toast.success("Your Item Added Successfully in Cart", {
      position: "top-center",
      style: {
        background: "linear-gradient(to right,#333,#00D100)",
        color: "white",
      },
      className: "toast-color",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    // console.log(id, itemname, price, image, quantity);
  };
  console.log(product);

  const deleteProduct = (id) => {
    const copydata = [...product];
    const copy = copydata.filter((item) => item.id !== id);
    setProduct(copy);
    toast.error("Your Item Removed Successfully from Cart", {
      position: "top-center",
      style: {
        background: "linear-gradient(to right,#333,#cf352e)",
        color: "white",
      },
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    if (id === 1) {
      setShowAdd(true);
    }
    if (id === 2) {
      setShowAddtwo(true);
    }
    if (id === 3) {
      setShowAddthree(true);
    }
    if (id === 4) {
      setShowAddfour(true);
    }
    if (id === 5) {
      setShowAddfive(true);
    }
  };

  return (
    <>
      <ToastContainer />

      <ProductContext.Provider
        value={{
          showAdd,
          showAddtwo,
          showAddthree,
          showAddfour,
          showAddfive,
          data,
          product,
          productAdd: (id, data, dataone, datatwo, datathree) => {
            addProduct(id, data, dataone, datatwo, datathree);
          },
          productDel: (id) => {
            deleteProduct(id);
          },
          change: (data) => {
            setData(data);
          },
          changeProduct: (data) => {
            setProduct(data);
          },
          // button's state
          changeShow: () => {
            setShowAdd(!showAdd);
          },
          changeShowtwo: () => {
            setShowAddtwo(!showAddtwo);
          },
          changeShowthree: () => {
            setShowAddthree(!showAddthree);
          },
          changeShowfour: () => {
            setShowAddfour(!showAddfour);
          },
          changeShowfive: () => {
            setShowAddfive(!showAddfive);
          },
        }}
      >
        {props.children}
      </ProductContext.Provider>
    </>
  );
};

export default Context;
