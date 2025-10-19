import {useState} from "react";
import "LoginSignup.css"

function Order(){
     const[adress,setAdress]=useState('');
      
     const[fullName,setfullName]=useState('');
     const[lastName,setlastName]=useState('');
     const[email,setemail]=useState('');
     const[phoneNumber,setphoneNumber]=useState('');
     const[city,setcity]=useState('');

    return(
  <>
    
    <div className="auth-container"></div>
    <input  className="input2" type="text" placeholder="Enter Full Name" value={fullName} onChange={(e)=>setfullName(e.target.value)}required/>
    <input  className="input2" type="text" placeholder="Enter Last Name" value={lastName} onChange={(e)=>setlastName(e.target.value)}required/>
       <input  className="input2" type="text" placeholder="Enter Email" value={email} onChange={(e)=>setemail(e.target.value)}required/>
       <input  className="input2" type="text" placeholder="Enter Phone Number" value={phoneNumber} onChange={(e)=>setphoneNumber(e.target.value)}required/>
       <input  className="input2" type="text" placeholder="Enter City" value={city} onChange={(e)=>setcity(e.target.value)}required/>
       <input className="input2" type="text" placeholder="Adress" value={adress} onChange={(e)=>setAdress(e.target.value)} required/>  
        </>
    )
}
export default Order;