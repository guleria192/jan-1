import React , {useState} from 'react'
import './App.css';

import { useNavigate } from 'react-router-dom';


// import {useHistory} from 'react-router-dom';

 function Login() {
  
    
      const [username,setUsername]=useState("");
      const [password,setPassword]=useState("");
      const navigate = useNavigate();

async function login(){
console.log(username,password);
let item ={username,password};
let result = await fetch('https://dummyjson.com/auth/login', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(item)
})
result = await result.json();
console.log(result);
localStorage.setItem("user-info",JSON.stringify(result))
navigate('/profile');


  }

  return (
    <div className="App">
      <div className='heading'><h1>Login</h1></div>
      <div className='box'>
        <input type="text" onChange={(e)=>setUsername(e.target.value)} placeholder='username'/>
        <input type="password" onChange={(e)=>setPassword(e.target.value)} placeholder='password'/>
        <button onClick={login}>Login</button>
      </div>
    </div>
  );
   
  
}

export default Login;