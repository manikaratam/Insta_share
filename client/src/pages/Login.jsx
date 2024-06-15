import React from 'react'
import {  Label, TextInput } from 'flowbite-react'
import { Link } from 'react-router-dom'
import signLogo from '../assets/Illustration.png'
import logo from '../assets/Standard Collection 8.png'

export default function Login() {
  return (
    <div className='mt-24'>
      <div className='flex px-5'>
        <div className='flex-1 justify-center hidden md:block  '>
          <img src={[signLogo]} />
        </div>
        <div className='flex-1 flex  justify-center'>
          <div className=' w-60 sm:w-96 h-auto px-5 py-3 rounded-md border-4 border-stone-100'>
          <form  >
            <div >
              <div className='flex-col flex items-center gap-2'>
              <img src={[logo]}/>
              <strong>Insta Share</strong>
              </div>
              <Label  value='USERNAME'/> 
              <TextInput className='my-1' type='text' placeholder='Enter Username' id='username'/>
              <Label value='PASSWORD'/> 
              <TextInput className='my-1' type='password' placeholder='Enter Password' id='password'/>
              <button className='w-full h-10 my-5 rounded-md bg-blue-500 hover:bg-blue-600 text-white font-bold' type='submit'>Login</button>
            </div> 
          </form>
          <div>
            <span>Don't have an account? </span>
            <Link to='/signup'>SingUp</Link>
          </div>
          </div>
          
        </div>
      </div>
      
    </div>

  )
}
