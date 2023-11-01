import React, { useRef, useState } from 'react'
import { FaTruck } from 'react-icons/fa';
import { AiOutlineHeart ,AiOutlineMenu ,AiOutlineClose} from 'react-icons/ai';
import { BsFillHandbagFill ,BsSearch} from 'react-icons/bs';
import { BiUserCircle } from 'react-icons/bi';
import { CiLogin } from 'react-icons/ci';
import { CiLogout } from 'react-icons/ci';
import { Link } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";

import './Navbar.css';




const Navbar = ({searchbtn}) => {
    const [search, setSearch] =useState()
    const { loginWithRedirect,logout, user, isAuthenticated } = useAuth0();
    
    // navbar 
    const navRef = useRef();
    const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};


  return (
   <>
   {/* <div className='free'>
        <div className='icon'>
        <FaTruck />
        </div>
        <p>FREE  shipping when shopping upto 400$</p>
        
   </div> */}
   <div className='main_header'>
    <div className="Container">
        <div className="logo">
            <img src="./logo.png" alt="logo" />
        </div>
        <div className="search_box">
            
            <input type="text" value={search} placeholder='Enter the product Name' autoComplete='off' onChange={(e) => setSearch(e.target.value)}/>  
            <button onClick={() => searchbtn (search)}><BsSearch /></button>     
        </div>
        <div className="icon">
            {
                isAuthenticated &&
                (
                <div className="account">
                <div className="user_icon">
                <BiUserCircle />
                </div>
                <p>Hellow {user.name}</p>
                </div>   
                )
                
            }
            
             <div className="second_icon">  
                 <Link to='/' className='link'><AiOutlineHeart /></Link>
                 <Link to='/cart' className='link'><BsFillHandbagFill /></Link>
            </div>  

        </div>
    </div>
   </div>
   {/* <div className="header">
        <div className="nav_container">
            <div className="nav">
            <ul>
                <li>
                    <Link to="/" className='link'>Home</Link>
                </li>
                <li>
                    <Link to="/product" className='link'>Product</Link>
                </li>
                <li>
                    <Link to="/about" className='link'>about</Link>
                </li>
                <li>
                    <Link to="/contact" className='link'>Contact</Link>
                </li>
            </ul>

            </div>
           
            <div className="auth">
                {
                    isAuthenticated?
                    <button onClick={()=>logout({ logoutParams: { returnTo: window.location.origin } })}> <CiLogout /></button>
                    :
                    <button onClick={()=>loginWithRedirect()}><CiLogin /></button>
                    
                }
              
               
            </div>
          
           
            <div className="menuicon" >
                <AiOutlineMenu />
            </div>
        </div>

   </div> */}

   {/* navbar section 2 */}
   <div className='navheader'>
			
			<nav className='nav' ref={navRef}>
               
				<a href="/">Home</a>
				<a href="/product">Product</a>
				<a href="/about">about</a>
				<a href="/contact">Contact</a>
    
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<AiOutlineClose />
				</button>
                <div className="auth">
                {
                    isAuthenticated?
                    <button onClick={()=>logout({ logoutParams: { returnTo: window.location.origin } })}> <CiLogout /></button>
                    :
                    <button onClick={()=>loginWithRedirect()}><CiLogin /></button>
                    
                }  
               </div>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<AiOutlineMenu />
			</button>
		</div>
   </>
  )
}

export default Navbar