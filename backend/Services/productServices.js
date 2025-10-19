 const Product = require('../Models/Product');

const addProduct = async (name, category, price, description, countInStock, image, images) => {
        res.status(201).json({
            success: true,
            message: "Product added successfully",
            data: product
        } );

  try{
  const newProduct = new Product(name, category, price, description, countInStock, image, images);
  const savedProduct = await newProduct.save();
  return savedProduct;
  }
   catch (error) {
    // Throw an error to be caught by the controller
    throw new Error('Failed to add product to the database: ' + error.message);
  }
};

const getProducts = async (filter = {}) => {
    try{
      // talk to database abd get products 
    const products = await Product.find(filter);// newest first
    return products;
    }
    catch(error){
        throw new Error("Error fetching products: "+ error.message)
    }
     }
     const getProductsByIds = async (ids)=>{
      try {
        const products=await Product.find({_id :{ $in:ids }});
        return products;
      } catch (error) {
        throw new Error("Error Fetching products by IDs;"+error.message);
      }
      
     }


module.exports={getProducts,addProduct,getProductsByIds}
