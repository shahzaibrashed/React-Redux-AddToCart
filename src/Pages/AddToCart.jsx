/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { AiFillProduct } from "react-icons/ai";
import { RemoveProduct } from '../redux/cartSystem';

const AddToCart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.user);
  console.log(cart, "cart");

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h1 style={{ textAlign: "center", alignItems: "center" }}>Carts Items</h1>
        <div
          onClick={() => navigate("/")}
          style={{
            height: "50px",
            width: "50px",
            borderRadius: "50%",
            border: "2px solid black",
            marginTop: "20px",
            color: "white",
            marginLeft: "5px",
            background: "black",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
            cursor: "pointer",
          }}
        >
          <AiFillProduct />

          <div
            style={{
              position: "absolute",
              top: "-5px",
              right: "-5px",
              backgroundColor: "red",
              color: "white",
              width: "20px",
              height: "20px",
              borderRadius: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "12px",
              fontWeight: "bold",
            }}
          >
            {cart.length}
          </div>
        </div>
      </div>

      <div className="box">
        {cart?.map((item) => (
          <div className="outer" key={item.id}>
            <div className="content animated fadeInLeft">
              <span className="bg animated fadeInDown">EXCLUSIVE</span>
              <h1>{item.category}</h1>
              <p>
                {item.description?.split(' ').slice(0, 20).join(' ')}
                {item.description?.split(' ').length > 20 ? '...' : ''}
              </p>
              <p>Quantity: {item.quantity}</p>
              <div className="button">
                <a role="button">{item.price}</a>
                <a
                  onClick={() => dispatch(RemoveProduct(item))}
                  className="cart-btn"
                  role="button"
                >
                  <i className="cart-icon ion-bag" />
                  Delete From Cart
                </a>
              </div>
            </div>
            {item.image && (
              <img
                src={item.image}
                width="300px"
                className="animated fadeInRight"
              />
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default AddToCart;
