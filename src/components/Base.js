import React, { useState } from 'react';
import { Link } from 'react-router-dom';  
import { AiOutlineArrowRight } from 'react-icons/ai';
import { FiTruck } from 'react-icons/fi';
import { BiDollar } from 'react-icons/bi';
import { HiReceiptPercent } from 'react-icons/hi2';
import { BiHeadphone } from 'react-icons/bi';
import { BsFillCartPlusFill } from 'react-icons/bs';
import { AiOutlineEye } from 'react-icons/ai';
import { AiOutlineHeart,AiOutlineClose } from 'react-icons/ai';
import { useAuth0 } from '@auth0/auth0-react';
import Homeproduct from './Homeproduct';
 import './base.css'

const Base = ({detail ,view, close ,setClose ,addtocart}) => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  const[homeProduct, setHomeproduct] =useState(Homeproduct)
  return (
    <>
    {
        close ?
        <div className="product_details">
        <div className="container">
            <button onClick={() => setClose(false)} className='closebtn'><AiOutlineClose /></button>
          {
            detail.map((curElm) => {
               return(
                <div className="productbox">
                    <div className="img_box">
                        <img src={curElm.Img} alt={curElm.Title} />
                    </div>
                    <div className="detail">
                        <h4>{curElm.Cat}</h4>
                        <h2>{curElm.Title}</h2>
                        <p>A screen everythig will love :</p>
                        <h4>{curElm.Price}</h4>
                        <button>Add To Cart</button>
                    </div>
                </div>
               ) 
            })
          }
         
        </div>
    </div> :null
    }

    {/* top banner  */}
    <div className="top_banner">
        <div className="container">
            <div className="detail">
               <h2> The Best Note Book Collections 2023</h2> 
               <Link to="/product" className='link' >Shop Now <AiOutlineArrowRight /></Link>
            </div>
            <div className="image_box">
                <img src="./img/slider-img.png" alt="sliderimage" />
            </div>

        </div>
    </div>
    {/* product type  */}
    <div className="product_type">
        <div className="container">
          <div className="box">
            <div className="img_box">
               <img src="./img/Mobile phone.png" alt="mobile" />
            </div>
            <div className="details">
              <p>32 Products</p>
            </div>
          </div>
          <div className="box">
            <div className="img_box">
               <img src="./img/headphone.png" alt="headphone" />
            </div>
            <div className="details">
              <p>32 Products</p>
            </div>
          </div>
          <div className="box">
            <div className="img_box">
               <img src="./img/cpu heat.jpg" alt="cpu" />
            </div>
            <div className="details">
              <p>54 Products</p>
            </div>
          </div>
          <div className="box">
            <div className="img_box">
               <img src="./img/smart watch.png" alt="watch" />
            </div>
            <div className="details">
              <p>23 Products</p>
            </div>
          </div>
        </div>
    </div>
    {/* about  */}
    <div className="about">
      <div className="container"> 
      <div className="box">
        <div className="icon">
         <FiTruck />
        </div>
        <div className="details">
          <h3>Free shipping</h3>
          <p>Order above 400$</p>
        </div>
        </div>
        <div className="box">
        <div className="icon">
         <BiDollar />
        </div>
        <div className="details">
          <h3>Return & Refund</h3>
          <p>Money Back Guarenty</p>
        </div>
      </div>
      <div className="box">
        <div className="icon">
         <HiReceiptPercent />
        </div>
        <div className="details">
          <h3>Member Discount</h3>
          <p>on every order</p>
        </div>
      </div>
      <div className="box">
        <div className="icon">
         <BiHeadphone />
        </div>
        <div className="details">
          <h3>customer Support</h3>
          <p> Every Time Call Support</p>
        </div>
      </div>
      </div>
      </div>
    {/* products  */}
    <div className="product">
      <h2>Top Products</h2>
      <div className="container">
        {
          homeProduct.map((curElm)=>
          {
            return(
           
            <div className="box" key={curElm.id}>
              <div className="img_box">
              <img src={curElm.Img} alt={curElm.Title} />
              <div className="icon">
              {
                isAuthenticated ?
                 <li onClick={() => addtocart (curElm)}><BsFillCartPlusFill /></li>
                    :
                  <li onClick={() => loginWithRedirect()}><BsFillCartPlusFill /></li>
                }
                <li onClick={() => view (curElm)}><AiOutlineEye /></li>
                <li><AiOutlineHeart /></li>
              </div>
              </div>  
              <div className="details">
                <p>{curElm.Cat}</p>
                <h3>{curElm.Title}</h3>
                <h4>${curElm.Price}</h4>
              </div>
            </div>
           
           )
          })
        }
      </div>
    </div>
{/* banner */}
    <div className="banner">
      <div className="container">
      <div className="details">
        <h4>Latest Technology Added</h4>
        <h3>Apple ipad 10.2 9thgen -2023</h3>
        <p>$ 986</p>
        <Link to='/product' className='link'>Shop Now <AiOutlineArrowRight /></Link>
      </div>
      <div className="img_box">
        <img src="./img/slider-img.png" alt="sliderimg "/>
      </div>
      </div>
      
    </div>

    </>
  )
}

export default Base