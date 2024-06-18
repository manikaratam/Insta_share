import { Button, Navbar, TextInput } from 'flowbite-react';
import React from 'react'
import { Link, useLocation  } from 'react-router-dom'
import logo from '../assets/Standard Collection 8.png'
import {AiOutlineSearch} from 'react-icons/ai';
import { useSelector } from 'react-redux';

export default function Header() {
    const path=useLocation().pathname;
    const {currentUser}=useSelector(state=>state.user)
  return (
    <Navbar className='border-b-2'>
        <Link to="/" className='flex items-center gap-2 text-sm sm:text-xl' >
        <img src={[logo]}/>
        <div>
        <strong>Insta Share</strong>
        </div>
         </Link>
         <form>
            <TextInput
              type='text'
              placeholder='search'
              rightIcon={AiOutlineSearch}
              className='hidden lg:inline'
            />  
         </form>
         <Button className='w-10 h-8 lg:hidden' color='gray' pill>
            <AiOutlineSearch/>
         </Button>
         <div className='flex gap-2 md:order-2'>
          {
            currentUser?(
              
              <Button gradientDuoTone='purpleToBlue' outline>Logout</Button> 
             
            )
            :(
              <Link to='/login' >
          <Button gradientDuoTone='purpleToBlue' outline>Login</Button> 
          </Link>
            )
          }
         <Navbar.Toggle/>
         </div>
         <Navbar.Collapse className='items-center gap-2 '>
            <Navbar.Link active={path==="/"} as={'div'}>
                <Link to='/' className='text-sm sm:text-xl' >Home</Link>
            </Navbar.Link>
            <Navbar.Link active={path==="/profile"} as={'div'}>
                <Link to='/profile' className='text-sm sm:text-xl'>Profile</Link>
            </Navbar.Link>   
         </Navbar.Collapse>
         
        
    </Navbar>
  )
}
