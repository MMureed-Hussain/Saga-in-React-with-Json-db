import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


export default function Cart () {
  const cart = useSelector((state) => state.cartData);
  let amount = cart.length && cart.map(item=>item.Price).reduce((prev, next)=>prev+next)
console.warn(amount)
  return (
    <>
    <div>
        <Link to="/" >Go to Products Link</Link>
        <h1>Cart Page</h1>
        <div className="cart-page-container">
            <table>
                <tr>
                    <td>Name</td>
                    <td>Price</td>
                    <td>Tab</td>
                    <td>Photo</td>
                </tr>
                {
                    cart.map((item) => <tr key={item.key}>
                        <td>{item.Name}</td>
                        <td>{item.Price}</td>
                        <td>{item.Tab}</td>
                        <td>{item.Photo}</td>
                    </tr>)
                }
            </table>
            <div className="price-details">
                <div className="adjust-price"><span>Amount</span><span>{amount}</span></div>
                <div className="adjust-price"><span>Discount</span><span>{amount/10}</span></div>
                <div className="adjust-price"><span>Tax</span><span>000</span></div>
                <div className="adjust-price"><span>Total</span><span>{amount-(amount/10)}</span></div>

            </div>
        </div>
    </div>
    </>
  );
}
