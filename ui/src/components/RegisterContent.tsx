import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addUser,deleteUser } from '../slices/userslices';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const RegisterContent: React.FC = () => {
    const redirect= useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [contact, setContact] = useState('');
  const userDispatch = useDispatch()

  const userList = useSelector((state: any) => state.users.userList);
  
  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  const handleContactChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContact(e.target.value);
  };

  console.log("Register :"+userList.length)
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const id = userList.length+1
    userDispatch(addUser({
      id: id,
      username: username,
      email: email,
      password: password,
      contact: contact
    }))
    const userData = {
      name: username,
      email: email,
      password: password,
      contact: contact
    };

    axios
      .post('http://localhost:3001/user-endpoint/create', userData)
      .then((response: { data: any; }) => {
        // Handle success response here if needed
        Swal.fire({
            title: "Thank You",
            text: `${userData.name} account is created in Pro Builder`,
            icon: "success"
          });
        redirect("/login")
        console.log('User created successfully!', response.data);
      })
      .catch((error: any) => {
        // Handle error here
        console.error('There was a problem creating the user:', error);
        
      });

    // Reset form fields
    setUsername('');
    setEmail('');
    setPassword('');
    setContact('');
  };

  return (
    <>
       <div className="main">
        <div className="login_card">
           <h2>New Account</h2>
           <div className="LoginForm">
            <form onSubmit={handleSubmit}>

            <input
            type="text"
            id="username"
            value={username}
            placeholder='Username'
            onChange={handleUsernameChange}
          />
            <input
            type="email"
            id="email"
            value={email}
            placeholder='Email Address'
            onChange={handleEmailChange}
          />

<input
            type="password"
            id="password"
            value={password}
            placeholder='Password'
            onChange={handlePasswordChange}
          />
<input
            type="number"
            id="contact"
            value={contact}
            placeholder='Contact'
            onChange={handleContactChange}
          />
          <div className="loginBtn">
          <button type="submit" className="logBtn">Sign Up</button>
          </div>
            </form>
            
        <div className="other_options">
         <span>Already have an account?  <Link to="/login">Click here</Link> </span>
         
        </div>

           </div>
        </div>
        <div className="intro_image">
        <img src="../public/02.png" alt="" className="bg_image" /> 
        </div>
    </div>
    </>
  );
};

export default RegisterContent;