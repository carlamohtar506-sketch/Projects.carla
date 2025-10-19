import Header from "../Header";
import  Card from "../Card";
import Footer from "../Footer";
import oven from '../assets/oven.jpg';
import cookwareset from '../assets/cookwareset.jpg';
import vaccumjug from '../assets/vaccumjug.jpg';
import coffeepot from '../assets/coffeepot.jpg';
import crepepan from '../assets/crepepan.jpg';
import enamelledpan from'../assets/enamelledpan.jpg';
import bycicle from '../assets/bycicle.jpg';
import mug from '../assets/mug.jpg';
import mug2 from '../assets/mug2.jpg';
import bodybalance from '../assets/bodybalance.jpg';
import dmug from '../assets/dmug.jpg';
import dmug2 from'../assets/dmug2.jpg';
import eurocups from '../assets/eurocups.jpg';
import teakettle from '../assets/teakettle.jpg';
import vgdryer from'../assets/vgdryer.jpg';
import mug3 from '../assets/mug3.jpg';

function Home (){
      const products = [
 {id:4,image:mug,title:"Mugs",desc:"12 pieces", price:7.5,isInStock:true},
 {id:5,image:mug2,title:"Mugs",desc:"12 pieces", price:7.5,isInStock:true},
 {id:12,image:mug3,title:"Mugs",desc:"12 pieces", price:7.5,isInStock:true},
 {id:6,image:bodybalance,title:"Body Balance",desc:"Smart Body Fat Scale",price:18.15,isInStock:true},
 {id:7,image:dmug, title:"Double Glass Mug",desc:"280ml",price:3.15 ,isInStock:true},
 {id:8,image:dmug2, title:"Double Glass Mug",desc:"Flowered Mug",price:2.40 ,isInStock:true},
 {id:9 ,image:eurocups,title:"Euro Cups",desc:"Dzn,275ml",price:8.15,isInStock:true},
 {id:10,image:teakettle,title:"Tea Kettle Set",desc:"1 litre,1.5 litre,2 litre",price:18.75,isInStock:true},
 {id:13,image:coffeepot, title:"Coffee Pots", desc:"250ml,350ml,550ml",price:13.75,isInStock:true},
 {id:14,image:oven,title:"Oven Set 3 pieces",desc:"28cm,30cm,34cm", price:45,isInStock:true},
{id:15,image:cookwareset,title:"Cookware Set",desc:"Multiple colors available" ,price:193.75,isInStock:true},
{id:16,image:vaccumjug,title:"Cookware Set",desc:"Preserve heat and cold",price:10.65,isInStock:true},


];
    return(
        <>
     
<Header/>
        <div className="frstrow">


      <Card
        key={1}
        id={1}
        image={crepepan}
        title="Crepe Pan"
        desc="28cm"
        price={17.5}
        isInStock={true}
      />
      <Card
        key={2}
        id={2}
        image={enamelledpan}
        title="Enamelled Pan"
        desc="different sizes available"
        price="according to size"
        isInStock={true}
      />
      <Card
        key={3}
        id={3}
        image={bycicle}
        title="Granite Spices"
        desc="Available in diffrent colors"
        price={8.15}
        isInStock={true}
      />
      <Card
        key={11}
        id={11}
        image={vgdryer}
        title="Salad Spinner"
        desc="Multicolors Available"
        price={7.10}
        isInStock={true}
      />
     </div>
  <div>
{products.map((product) =>(
  <Card
  key={product.id}
     image={product.image}
          title={product.title}
          desc={product.desc}
          price={product.price}
          isInStock={product.isInStock}/>

))}
      </div>
    
<Footer/>
</>
)

}
export default Home ;