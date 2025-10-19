import {useState} from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function Signup (){
 const[username,setUsername]=useState('');
  const[password,setPassword]=useState('');
 const[firstName,setfirstName]=useState('');
 const[lastName,setlastName]=useState('');
 const[email,setemail]=useState('');
 const[phoneNumber,setphoneNumber]=useState('');

 const [error,setError] = useState('');
 const [message,setMessage] = useState('');

  const handleSignup=async()=>{
      try{ 
      if(!username || !password || !firstName || !lastName || !email || !phoneNumber){
        setError('Please fill all required fields');
        return;
      }
      const response = await axios.post("http://localhost:3000/users/Signup", {
       username: username,
       password: password,
       firstName: firstName,
       lastName: lastName,
       email: email,
       phoneNumber: phoneNumber,
   
    });
    const navigate =useNavigate();

        if(response.data.success === false){
          console.log("ERROR",response.data.errors[0].msg);
      setError(response.data.errors[0].msg);
      return;
    }
    else {
      setError('');
      setMessage('Signup successful! Redirecting to products page...');
      navigate('/')
    }}
    catch(err){
      if(err.response && err.response.data && err.response.data.errors){
        setError(err.response.data.errors[0].msg);
      } else {
        setError(err.response.data.message||'An error occurred during signup. Please try again.');
      }
     
    }
  }

  
    return(
        <>
    
        <div className="auth-container">

      <h2 className="title">Signup Page</h2>
<div onSubmit={handleSignup} >
    <input className="input2" type="text" placeholder="Enter Username" value={username} onChange={(e)=>setUsername(e.target.value)} required/>
    <input  className="input2" type="text" placeholder="Enter Password" value={password} onChange={(e)=>setPassword(e.target.value)}required/>
    <input  className="input2" type="text" placeholder="Enter First Name" value={firstName} onChange={(e)=>setfirstName(e.target.value)}required/>
    <input  className="input2" type="text" placeholder="Enter Last Name" value={lastName} onChange={(e)=>setlastName(e.target.value)}required/>
       <input  className="input2" type="text" placeholder="Enter Email" value={email} onChange={(e)=>setemail(e.target.value)}required/>
       <input  className="input2" type="text" placeholder="Enter Phone Number" value={phoneNumber} onChange={(e)=>setphoneNumber(e.target.value)}required/>
  <button onClick={handleSignup}>Sign Up</button>
   <p>{error}</p>
   <p>{message}</p>
</div>
<p className="dtac">Already have an Account  <a href="./login">Login</a></p>
</div>

        </>
    )}

export default Signup;