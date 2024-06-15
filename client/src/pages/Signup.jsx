import React, { useState } from 'react'
import signLogo from '../assets/Illustration.png'
import logo from '../assets/Standard Collection 8.png'
import {  Label, Spinner, TextInput } from 'flowbite-react'
import { Link,useNavigate } from 'react-router-dom'
export default function Signup() {

  const navigate = useNavigate();
  const [formData,setFormData]=useState({});
   const[errorMessage,setErrorMessage]=useState(null);
   const[loading,setLoading]=useState(false);
  const handleChange =(e)=>{
       setFormData({...formData,[e.target.id]: e.target.value.trim()});
  };
   const handleSubmit = async (e)=>{
       e.preventDefault();
       if(!formData.username|| !formData.email || !formData.password){
           return setErrorMessage('please fill all the  fields');
        }
       try {
        setLoading(true);
          setErrorMessage(null);
          const res = await fetch('/api/auth/signup',{
            method:'POST',
            headers:{'content-Type':'application/json'},
            body:JSON.stringify(formData),
          });
          const data = await res.json();
          if(data.success===false){
            setLoading(false);
            return setErrorMessage('User already exists');
            
          }
          setLoading(false);
          if(res.ok){
            navigate('/login')
          }
       } catch (error) {
        setErrorMessage(error.message);
        setLoading(false);
       }
   };
  return (
    <div className='mt-24'>
      <div className='flex px-5'>
        <div className='flex-1 justify-center hidden md:block  '>
          <img src={[signLogo]} />
        </div>
        <div className='flex-1 flex  justify-center'>
          <div className=' w-60 sm:w-96 h-auto px-5 py-3 rounded-md border-4 border-stone-100'>
          <form onSubmit={handleSubmit} >
            <div >
              <div className='flex-col flex items-center gap-2'>
              <img src={[logo]}/>
              <strong>Insta Share</strong>
              </div>
              <Label  value='USERNAME'/> 
              <TextInput className='my-1' type='text' placeholder='Enter Username' id='username'onChange={handleChange}/>
           
              <Label value='EMAIL'/> 
              <TextInput className='my-1' type='email' placeholder='Enter Email' id='email'onChange={handleChange}/>
            
              <Label value='PASSWORD'/> 
              <TextInput className='my-1' type='password' placeholder='Enter Password' id='password'onChange={handleChange}/>
              {
                errorMessage&&(
                  <p className='text-red-600'>{errorMessage}</p>
                )
              }
              
              <button className='w-full h-10 my-5 rounded-md bg-blue-500 hover:bg-blue-600 text-white font-bold' type='submit' disabled={loading}>
                 {
                  loading ? 
                  (<>
                  <Spinner/>
                  <span>Loading...</span>
                  </>)
                   :'signup'
                 }
                </button>
            </div> 
          </form>
          <div>
            <span>Have an account ? </span>
            <Link to='/login'>SingIn</Link>
          </div>
          </div>
          
        </div>
      </div>
      
    </div>
  )
}
