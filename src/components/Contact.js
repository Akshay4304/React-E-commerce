import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import './Contact.css';

const Contact = () => {
    const { loginWithRedirect,logout, user, isAuthenticated } = useAuth0();
    const [ users, setUser ] = useState(
        {
            Name: '', Email: '', subject: '',message: ''
        }
    );
    let name, value
    const  data = (e) =>
    {
        name = e.target.name;
        value = e.target.value;
        setUser({...users, [name]: value})
    }
    const senddata = async (e) =>
    {
        const{ Name, Email, subject,message} =users
        e.preventDefault();
        const options = {
            method: 'POST',
            headers : { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                Name, Email, subject,message
            })
        }
        const res = await fetch('https://e-commerce-contact-eb90c-default-rtdb.firebaseio.com/Message.json', options)
        
        console.log(res)
        if(res)
        {
            alert('ypur message sent')
        }
        else
        {
            alert('an error occurred')
        }
    
    }
  return (
    <>
    <div className="contact_container">
        <div className="contant">
            <h2> # contact us</h2>
            <div className="form">
               <form action="" method='POST'>
                <input type="text" name='Name' value={user.name} placeholder='Enter Your Full Name' required autoComplete='off' onChange={data}/>
                <input type="email" name='Email' value={users.Email} placeholder='Enter Your E-mail' autoComplete='off' onChange={data}/>
                <input type="text" name='subject' value={users.subject} placeholder='Subject' autoComplete='off' onChange={data}/>
                <textarea name='message' value={users.message} placeholder='Your messege' autoComplete='off' onChange={data}></textarea>
                {
                    isAuthenticated ?
                    <button type='submit' onClick={senddata}>Send</button>
                    :
                    <button type='submit' onClick={() => loginWithRedirect()}>Login</button>
                }
                
               </form>
            </div>

        </div>
    </div>
    </>
  )
}

export default Contact