import React, { useEffect, useState } from "react";
// import "./nav.css";
// import "../pages/Main/dashboard.css";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart, AddToCart, emptyCart, RemoveFromCart, removeToCart } from "../redux/Action";
import { productList } from "../redux/ProductAction";

export default function Dashboard() {
  const dispatch = useDispatch();
  let data = useSelector((state)=>state.productData);
  console.warn("data in main component", data);
  
  useEffect(()=>{
    dispatch(productList())
  },[])
  return (
    <>
   <div>
      <div>
      <button onClick={() => dispatch(emptyCart())}>Empty Cart</button>
      </div>
      <div className='product-container'>
        {
          data.map((item)=><div className='product-item'>
            <div>Name : {item.Name} </div>
            <div>Price : {item.Price} </div>
            <div>Tab : {item.Tab} </div>
            <div>Image:
              <img src={item.Photo} alt="" />
              </div>
            {/* <div>Brand : {item.brand} </div> */}
            <div>
              <button onClick={() => dispatch(addToCart(item))} >Add to Cart</button>
              <button onClick={() => dispatch(removeToCart(item.id))}>Remove to Cart</button>
            <Link to="/front">Front</Link>

              </div>
          </div>)
        }
      </div>
    </div>
    </>
  );
}
