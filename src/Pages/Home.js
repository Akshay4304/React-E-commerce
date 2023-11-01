import React, {useState} from 'react';
import Navbar from '../components/Navbar';
import { BrowserRouter } from "react-router-dom";
import Rout from '../components/Rout';
import Footers from '../components/Footers';
import Productdetails from '../components/Productdetails';




function Home() {
  // add to cart 
 const [cart ,setCart] =useState([])

  //productdetails 
  const [close, setClose] =useState(true)
  const [detail,setDetail] =useState([])
  // filter the product 
  const [product,setProduct] = useState(Productdetails)
  const searchbtn = (product) => 
  {
    const change =Productdetails.filter((x) => 
      {
        return x.Cat === product
      })
      setProduct(change)
  }
  // productdetails 
  const view = (product) =>
  {
    setDetail([{...product}])
    setClose(true)
  }
  // add to cart 
  
  const addtocart =(product) =>
  {
     const exsit =cart.find((x) =>
   {
     return x.id === product.id
   })
    if(exsit){
      alert('This product has already been added')
    }
    else{
      setCart([...cart, {...product, qty:1}])
      alert('product added successfully')
    }
  }
  console.log(cart)
  return (
    <div className='Container'>
      <BrowserRouter>
      <Navbar searchbtn={searchbtn}/>
      <Rout product ={product} setProduct={setProduct} detail={detail} view={view} close={close} setClose={setClose} cart={cart} setCart={setCart} addtocart={addtocart}/>
      <Footers/>
      </BrowserRouter>
    </div>
  )
}


export default Home