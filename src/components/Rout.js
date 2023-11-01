import React from 'react'
import { Routes,Route } from 'react-router-dom';
import Base from './Base';
import Product from './Product';
import Cart from './Cart';
import Contact from './Contact';

const Rout = ({product, setProduct, detail ,view ,close ,setClose ,cart ,setCart ,addtocart}) => {
  return (
   <>
   <Routes>
    <Route path='/' element={<Base  detail={detail} view={view} close={close} setClose={setClose} addtocart={addtocart} />}></Route>
    <Route path='/product' element={<Product product ={product} setProduct={setProduct} detail={detail} view={view} close={close} setClose={setClose} addtocart={addtocart}/>}></Route>
    <Route path='/cart' element={<Cart cart={cart} setCart={setCart} />}></Route>
    <Route path='/contact' element={<Contact />}></Route>
   </Routes>
   </>
  )
}

export default Rout