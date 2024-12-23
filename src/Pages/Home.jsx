/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import './Home.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { AddCart } from '../redux/cartSystem';
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from 'react-redux';
import axios from 'axios';
import { Suspense, useEffect, useState } from 'react';
import { ScaleLoader } from 'react-spinners';

function Home() {

  const [productData, setProductData] = useState([])
  const { cart } = useSelector(item => item.user)
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const getData = async () => {
    try {
      const res = await axios.get('https://fakestoreapi.com/products');
      setProductData(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(productData, "productData");
  useEffect(() => {
    getData()
  }, [])
  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h1 style={{ textAlign: "center", alignItems: "center" }}>Products Cards</h1>
        <div
          onClick={() => navigate("/gotocart")}
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
          <FaShoppingCart />

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
      <Suspense
        fallback={
          <div className="mx-auto text-center w-full mt-[350px] h-[50vh]">
            <ScaleLoader style={{color:"blue"}} height={90} radius={0} width={4} />
          </div>
        }
      >
        {productData.map((item) => {
          return (
            <div className="outer">
              <div className="content animated fadeInLeft">
                <span className="bg animated fadeInDown">EXCLUSIVE</span>
                <h1>
                  {item.category}
                </h1>
                <p>
                  {item.description.split(' ').slice(0, 20).join(' ')}{item.description.split(' ').length > 20 ? '...' : ''}
                </p>

                <div className="button">
                  <a href="#">{item.price}</a>
                  <a onClick={() => dispatch(AddCart(item))} className="cart-btn" href="#">
                    <i className="cart-icon ion-bag" />
                    ADD TO CART
                  </a>
                </div>
              </div>
              <img
                src={item.image}
                width="300px"
                className="animated fadeInRight"
              />
            </div>
          );
        })}
        </Suspense>
      </div>
    </>
  );
}
export default Home;
