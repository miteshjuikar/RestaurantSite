import React from 'react'


import { AiFillHome } from "react-icons/ai";
import { MdFastfood } from "react-icons/md";
import { FaCartPlus } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { IoLogOut } from "react-icons/io5";
import { TbSquareRoundedLetterF } from "react-icons/tb";




function Navbar() {
  return (
    <>
       <nav className='navbar1'>
        <ui>
            <li>
                <a href='/'> 
                    <TbSquareRoundedLetterF className='icon' />
                    <span className='nav_item'>Food Mall</span>
                </a>
            </li>
            <li>
                <a href='/'> 
                    <AiFillHome className='icon'/>
                    <span className='nav_item'>Home</span>
                </a>
            </li>
            <li>
                <a href='/'>
                    <MdFastfood className='icon'/>
                    <span className='nav_item'>Food List</span>
                </a>
             
            </li>
            <li>
                <a href='/'> 
                    <FaCartPlus className='icon'/>
                    <span className='nav_item'>Cart</span>
                </a>
                
            </li>
            <li>
                <a href='/'> 
                    <FaLocationDot className='icon'/> 
                    <span className='nav_item'>Location</span>
                </a>
                
            </li>
            <li>
                <a href='/' className='logout'> 
                    <IoLogOut className='icon '/>
                    <span className='nav_item'>Log Out</span>
                </a>
            
            </li>
      
        </ui>
       </nav>

    </> 
  )
}

export default Navbar
