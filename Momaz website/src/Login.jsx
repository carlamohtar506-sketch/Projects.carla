import{useState}from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import './LoginSignup.css'
function Login() {
    const[username,setUsername]=useState('')
  const[password,setPassword]=useState('')
  const users=[
    {username:'user1',password:'pass1'},
   {username:'user2',password:'pass2'}
  ]
const [error,setError]= useState('')

    const navigate = useNavigate();

const handleLogin=()=>{
    const userfound=users.find ((user)=>user.username===username && user.password===password);
    if (userfound){
        navigate('/')
        seterror()
    }
else{
    setError ('Invalid Credentails')
}
}

      return(
<>
<div className="auth-container2">
  <h2 className="title">Login Page</h2>
<input className="input" type="text"  placeholder="Enter Username" value={username}
onChange={(e)=>setUsername(e.target.value)} required/>
<input className="input" type="password" placeholder="Enter Password" value={password}
onChange={(e)=>setPassword(e.target.value)}required/>
        <p className="dtac">  Don't have an account? <Link to="/Signup">Signup here</Link>
        </p>
 <button onClick={handleLogin} className="bttnh">Login</button>
            <p className="error">{error}</p>
</div>
</>
    )
    
}
export default Login;