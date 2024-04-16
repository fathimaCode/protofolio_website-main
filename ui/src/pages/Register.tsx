import React, { useState } from 'react';
import RegisterContent from '../components/RegisterContent';
import Header from '../components/header';



const Register: React.FC = () => {
 

  return (
    <>
 <div className='bg_home'>
        <Header/>
        <RegisterContent/>
      
    </div>
    </>
  );
};

export default Register;