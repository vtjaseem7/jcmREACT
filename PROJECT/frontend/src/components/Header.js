import React from 'react'
import Logo from './Logo'
import { CiSearch } from "react-icons/ci";
import { LuUserCircle } from "react-icons/lu";
import { GrCart } from "react-icons/gr";
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='h-20 shadow-md bg-slate-50'>
        <div className=' h-full container mx-auto flex items-center justify-between'>
            <div className=''>
                <Logo w={90} h={50}/>
            </div>

            <div className='hidden lg:flex items-center w-full justify-between max-w-sm border rounded-full focus-within:shadow pl-2'>
                <input type='text' placeholder='search product here...'className='w-full outline-none'/>
                <div className='text-lg min-w-[50px] h-8  bg-amber-400 flex items-center justify-center rounded-r-full text-white'>
                    <CiSearch/>
                </div>
            </div>

            <div className='flex items-center'>
                <div className='text-3xl  rounded-full cursor-pointer '>
                    <LuUserCircle/>
                </div>
              &nbsp;  &nbsp;&nbsp;&nbsp;
                <div className='text-2xl relative'>
                   <span><GrCart/></span>
                   <div className='bg-amber-400 text-white w-5 h-5 rounded-full p-1 flex items-center justify-center absolute -top-3 -right-3'>
                     <p className='text-xs'>0</p>
                    </div> 
                </div>

                <div>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <Button variant="contained" size="small" color="error"><Link to='/login'   >Login</Link> 
                  </Button>
                </div>

            </div>
        </div>
    </header>
  )
}

export default Header