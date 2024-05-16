import React from 'react'

const Login = () => {
  return (
    <div>
        <h1>king kong</h1>
        <form>
            Name  :
            <input type="text" name="" id=""/><br/> 
            Email:
            <input type="url" name="" id=""/><br/>
            Password:
            <input type="password" name="" id=""/><br/>
            Male :<input type="radio" name="Gender" id="" />
            Female :<input type="radio" name="Gender" id="" /><br/>
            <input type="button" value="submit" />

        </form>
        
    </div>
  )
}

export default Login