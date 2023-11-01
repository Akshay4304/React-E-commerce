import React from 'react';
import { BsFillCartPlusFill } from 'react-icons/bs';
import { AiOutlineEye } from 'react-icons/ai';
import { AiOutlineHeart,AiOutlineClose } from 'react-icons/ai';
import { useAuth0 } from '@auth0/auth0-react';
import Productdetails from './Productdetails';
import './Product.css';

const Product = ({product, setProduct ,detail ,view, close ,setClose,addtocart}) => {
    const { loginWithRedirect, isAuthenticated } = useAuth0();
   
    const filterproduct =(product) =>
    {
        const update = Productdetails.filter((x) => 
        {
            return x.Cat === product;
        })
        setProduct(update);
    }
    const Allproduct = () =>{
        setProduct(Productdetails)
    }
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
   
    <div className="products">
    <h2># Products</h2>
    <p>Home . Products</p>
        <div className="container">
            <div className="filter">
                <div className="category">
                    <h3>category</h3>
                    <ul>
                        <li onClick={() => Allproduct()}>All Product</li>
                        <li onClick={() => filterproduct ("Tablet")}>Tablet</li>
                        <li onClick={() => filterproduct ("smartwatch")}>smartwatch </li>
                        <li onClick={() => filterproduct ("headphone")}>headphone</li>
                        <li onClick={() => filterproduct ("powerbank")}>powerbank</li>
                        <li onClick={() => filterproduct ("camera")}>camera</li>
                        <li onClick={() => filterproduct ("gaming")}>gaming</li>
                    </ul>
                </div>
            </div>
            <div className="productbox">
                <div className="contant">
                    {
                        product.map((curElm)=>
                        {
                            return(
                                <>
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
                                    <h4> ${curElm.Price}</h4>
                                </div>
                                </div>
                                </>
                            )
                        }
                        )
                    }
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Product