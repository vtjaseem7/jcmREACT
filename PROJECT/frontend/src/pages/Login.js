import { Button } from '@mui/material';
import React, { useState } from 'react'
import { FaUserCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';



const Login = () => {
  const [data,setData] = useState({
    email : "",
    password : ""
  })
  
  const handleonchange = (e) =>{
    const { name , value } = e.target

    setData((preve)=>{
      return{
        ...preve,
        [name] : value
      }
    })
  }
    console.log("data login",data)

  return (
   
    <div className='mx-auto container px-4 block mt-4 '>
    <br/>
          <div className='bg-white p-4 w-full max-w-md mx-auto rounded'>
            <div className='text-6xl w-20 h-20 mx-auto' >
              <FaUserCircle/>
            </div>
            <form className='pt-6'>
              <br/>
              <div className='grid'>
                <label>Email :</label>
                <div className='bg-slate-100 p-2'>
                <input 
                type='email' 
                placeholder='enter email'
                name='email'
                value={data.email}
                onChange={handleonchange}
                className='w-full h-full outline-none bg-transparent'/>
                </div>
              </div>
                   <br/>
               <div>
                <label>Password :</label>
                <div className='bg-slate-100 p-2'>
                <input 
                type='password' 
                placeholder='enter password'
                name='password'
                value={data.password}
                onChange={handleonchange}
                className='w-full h-full outline-none bg-transparent'/>
                </div>
              </div>
                <br/><br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Button variant="contained" size="medium" color="error">
                Login
              </Button>
               
            </form>

              <p className='my-5'>Don't have an account? <Link to={"/signup"}className='text-red-600 hover:text-red-700 hover:underline' >Sign up</Link> </p>
          </div>
    </div>
    
  )
}

export default Login