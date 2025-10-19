import { Link } from 'react-router-dom';
import logo from './assets/momazlogo.jpg';
import cart from './assets/cart.jpg';
import profile from './assets/profile.jpg';

function Header(){
    return(
<>
<div className="header-container">
<img src={logo}/>
<nav className="navbar">
      <Link to="/">Home</Link>|
      <Link to="/Aboutus">Aboutus</Link>|
      <Link to="/Contact">Contact</Link>
    </nav>
    <Link to="/Cart">   <img className="logom"
     src={cart} /></Link>
       <Link to ="/Signup"><img className="profile" src={profile}/></Link>
    </div>
    </>
  );
}



export default Header;