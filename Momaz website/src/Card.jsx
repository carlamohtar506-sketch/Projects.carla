import './Card.css'
import React, { useState } from "react";
import { addToCart } from './cartUtils';

function Card({image,title,desc,price,isInStock}){
   const [isAddedtoCart,setIsAddedtoCart] = useState(true);
const handleAddtoCart =() =>{ 
    addToCart
    (id);}
  
return(
<> 
  <div className="card">
<img className="cardimg"src={image} />    
<h2 className="protitle "> {title}</h2>
<p className="prodesc" > {desc} </p>
<p className="prpr">{price}$</p>
 <p className={isInStock ? "Instock" :  "Outstock"}>
  { isInStock ? "In Stock" : "Out Of Stock"}</p>
  
      <button onClick={handleAddtoCart}> Add to Cart</button>
         </div>

</>
)

}
export default Card;