"use client"
import React, { useEffect, useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import jwt_decode from 'jwt-decode';
import Router from 'next/router';
import Image from 'next/image';

const Register = () => {

  const [email, setEmail] = useState('');
  const [value, setValue] = useState('');
  const [name, setName] = useState('');

  useEffect(() => {
    const token = sessionStorage.getItem('token');
    const decodedToken = jwt_decode(token);
    const storedEmail = decodedToken.email;
    if (storedEmail) {
      setEmail(storedEmail);
    }
    const storedName = decodedToken.name;
    if (storedName) {
      setName(storedName);
    }
  }, []);

  const text = `Let's get to know you a bit. We are a step closer to the world of FMC Weekend.`;
  
  const handleSubmit = async(e)=>{
    e.preventDefault();
    let obj = {
      name: e.target[0].value,
      email: e.target[1].value,
      college: e.target[2].value,
      number: value,
      // year: e.target[3].value,
      redeem: e.target[4].value,
      instaHandle: e.target[5].value,
      userType: e.target[6].value //insti user usertype 0
    };

    try {

    const res = await fetch(process.env.NEXT_PUBLIC_REACT_APP_BACKEND_URI + '/api/user', {
      method: 'PATCH',
      body: JSON.stringify(obj),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    console.log({ obj });
    const data = await res.json();
    console.log(data);

    if (data.message === 'success') {
      Router.push('/dashboard');
    } else {
      // alert('login failed, please try later');
      alert(data.message);
      // window.location.href = "/register";
    }
      
    } catch (error) {
      console.log(error);
    }

    // window.location.reload();
  }

  return (
    <>
   <form onSubmit={(e) => handleSubmit(e)} className=''>
    <div class="flex items-center min-h-screen bg-gray-50 p-10">
      <div class="flex-1 h-auto max-w-4xl mx-auto bg-white rounded-3xl shadow-xl">
        <div class="flex flex-col md:flex-row">
          <div  className=''>
          
              <Image
                  src={require("./static/clip.png")}
                  width={100}
                  height={100}
                  className=" md:h-full sm:h-1/2 w-96"
                  alt="signup"
                />
                <h1 class="absolute text-6xl w-2 text-white  top-20 md:mt-40 px-14 tracking-wide">
                    Create Your Account</h1>  
            
             
          </div>
          <div class="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
            
            <div class="w-full">
              
              <h1 class="mb-12 text-6xl font-bold text-center text-black tracking-normal">
                Sign up
              </h1>
              <div className=''>
                <label className="block text-sm">
                  Name
                </label>
              <input 
              type="text" 
              name="name"
               value={name}
               required readOnly 
               className="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
              />
           </div>
           <div className='mt-3'>
              <label className="block text-sm">
                Email
              </label>
              <input 
              type="email"
               name="email" 
               value={email} 
               required readOnly 
               className="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
               />
              </div>
             
        <div className='mt-3'>
        
        <label htmlFor="college" className="block text-sm">
          University / College Name
        </label>
        
        <input
          type="text"
          name="college"
          className="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
          value={
            email.endsWith('@iitbhu.ac.in') || email.endsWith('@itbhu.ac.in')
              ? 'Indian Institute of Technology (BHU) Varanasi'
              : ''
          }
          required
        />
        </div>
              
        <PhoneInput
          inputProps={{
            id: 'phone',
            required: true,
          }}
          inputStyle={{
            width: '100%',
            display: 'inline-block',
            border: '1.5px solid 	#F0F0F0',
            background: '#ffffff',
            borderRadius: '3%',
            height: '40px',
            padding:'7px',
            marginTop:'3px',
          }}
          buttonStyle={{ borderRadius: '2px',  margin: 'auto' }}
          containerStyle={{ width: '100%' }}
          country={'in'}
          value={value}
          onChange={setValue}
          autoFormat={true}
        
        />

        {email.endsWith('@iitbhu.ac.in') || email.endsWith('@itbhu.ac.in') ? (
          <div className='mt-3'>
            <label htmlFor="year"className="block text-sm">
              Year of Study
            </label>
            <select name="year" class="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600">
              <option value="1">I</option>
              <option value="2">II</option>
              <option value="3">III</option>
              <option value="4">IV</option>
              <option value="5">V</option>
            </select>
          </div>
        ) : null}
        <div className='mt-3'>
         <label htmlFor="redeem"  class="block text-sm">
          Referral Code
        </label>
        <input type="text" id="redeem" name="redeem" placeholder="XXXXXX"  class="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600" />
        </div>
        <div className='mt-3'>
        <label htmlFor="insta"  class="block text-sm">
        Instagram Handle
        </label>
        <input type="text" id="insta" name="insta" placeholder="fmc_weekend" required  class="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600" />
        </div>
        <div className='mt-3'>
        <label htmlFor="position" class="block text-sm">
         Wanna be a?
        </label>
        <select name="position"  class="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600">
          {
            email.endsWith('@iitbhu.ac.in') || email.endsWith('@itbhu.ac.in') ?
              (
                <option value="0">Participant</option>
              ) : (
                <>
                  <option value="1">Participant</option>
                  <option value="2">Campus Ambassador</option>
                </>
              )}
        </select>
        </div>
        <div className='text-center'>
  <button type="submit"
    class="mt-7 ml-12 px-4 py-2 border flex gap-2 border-slate-200 rounded-lg text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-15 bg-lime-400 ">
    
    <span>Submit</span>
</button>
</div>
            </div>
          </div>
        </div>
      </div>
    </div>
</form>    
</>
  );
};

export default Register;
