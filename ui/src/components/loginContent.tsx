import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import Swal from "sweetalert2";


const LoginContent: React.FC = () => {
  const redirect= useNavigate();
  const [email, setEmail] = useState('');

  const [password, setPassword] = useState('');
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const userData = {
      email: email,
      password: password,
    
    };
  console.log(userData)
  axios
  .post('http://localhost:3001/user-endpoint/getUserInfo', userData)
  .then((response: { data: any; }) => {
    // Handle success response here if needed
   const userInfo =response.data.data
     
      localStorage.setItem('userName',userInfo.name)
      localStorage.setItem('userid',userInfo._id)

    redirect("/home")
  })
  .catch((error: any) => {
    // Handle error here

    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Invalid Email or password!",
     
    });
    console.error('There was a problem creating the user:', error);
    
  });


    setEmail('');
    setPassword('');

  }
  return (
    <>
    <div className="main">
        <div className="login_card">
           <h2>Login</h2>
           <div className="LoginForm">
            <form onSubmit={handleSubmit}>
            <input
            type="text"
            id="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Email Address"           
          />

          <input
            type="password"
            id="password"
            value={password}
            placeholder='Password'
            onChange={handlePasswordChange}         
          />

          <div className="loginBtn">
          <button type="submit" className="logBtn">Login</button>
          </div>
            </form>
            
        <div className="other_options">
         <span>Need to create an account?  <Link to="/register">Click here</Link> </span>
         
        </div>

           </div>
        </div>
        <div className="intro_image">
        <img src="../public/02.png" alt="" className="bg_image" /> 
        </div>
    </div>
    </>
  )
}

export default LoginContent