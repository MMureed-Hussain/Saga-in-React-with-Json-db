import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { productSearch } from "../../redux/ProductAction";

export default function Header () {
  const result = useSelector((state) => state.cartData);
    const dispatch = useDispatch();
    console.warn("data in header", result);

  return (
    <>
        <div className="header">
            <Link to="/"><h1 className='logo'>E-Comm</h1></Link>
            <div className='search-box'>
                <input type="text" onChange={(event) => dispatch(productSearch(event.target.value))} placeholder='Search Product' />
            </div>
            <Link to="/cart">
                <div className="cart-div">
                    <span>{result.length}</span>
                    {/* <span>0</span> */}
                    <img src="https://cdn-icons-png.flaticon.com/512/263/263142.png" alt="" />
                </div></Link>

        </div>
    </>
  );
}

/*<Link to='/'>
      <h1 className="logoo">E-comm</h1>
      </Link>
      <div className="search-box">
          <input type="text" placeholder="search product"/>
        </div>
      <Link to="/cart">
        
      <div className="cart">
        <span>
          {result.length}
          <i
          class="fas fa-cart-plus"
          ></i>
        </span>
        <hr></hr>
      </div>
      </Link>
          style={{ fontSize: "108px", color: "red"}} 
            style={{ fontSize: "108px"}} */