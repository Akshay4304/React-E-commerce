import React from 'react';
import { BiLogoFacebook } from 'react-icons/bi';
import { BsInstagram } from 'react-icons/bs';
import { AiOutlineYoutube } from 'react-icons/ai';
import { FaWhatsapp } from 'react-icons/fa';
import { FiTwitter } from 'react-icons/fi';
import './Footer.css';

const Footers = () => {
  return (
    <>
    <div className="footer">
        <div className="container">
            <div className="about">
                <div className="logo">
                    <img src="./logo.png" alt="logo" />
                </div>
                <div className="details">
                    <p>we are a team designiers and developers that create high quality wordpress</p>
                    <div className="icon">
                        <li><BiLogoFacebook/></li>
                        <li><BsInstagram/></li>
                        <li><AiOutlineYoutube/></li>
                        <li><FaWhatsapp/></li>
                        <li><FiTwitter/></li>
                    </div>
                </div>
            </div>
            <div className="account">
                <h3>My Account</h3>
                <ul>
                    <li>Account</li>
                    <li>Orderr</li>
                    <li>Cart</li>
                    <li>Shipping</li>
                    <li>Return</li>
                    
                </ul>
            </div>
            <div className="Page">
                <h3>Pages</h3>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Terms & Conditions</li>
                </ul>
            </div>
        </div>
    </div>
    </>
  )
}

export default Footers