import './App.css'
import './Header.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Aboutus from './Pages/Aboutus';
import Contact from './Pages/Contact';
import SignupPage from './Pages/SignupPage';
import LoginPage from './Pages/LoginPage';
import CartPage from './Pages/CartPage';


function App() {


  return (
    <> <BrowserRouter>
  <Routes>
<Route path="/" element={<Home/>}/>
<Route path="/Aboutus" element={<Aboutus/>}/>
<Route path="/Contact" element ={<Contact/>}/>
<Route path ="/Login" element ={<LoginPage/>}/>
<Route path ="/Signup" element ={<SignupPage/>}/>
<Route path ="/cart" element ={<CartPage/>}/>
  </Routes>
      </BrowserRouter>
       
      
          
    
          </> 
        );
  
    

}

export default App;
