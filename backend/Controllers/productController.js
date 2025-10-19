
const {validationResult} = require('express-validator')
const {addProduct, getProducts, getProductsByIds} = require('../Services/productServices')
const getProductsController =async (req,res) =>{
    try{
        const { category } = req.query;

 let products = [];
    if (category) {
        let filter = { category: category };
        products = await getProducts(filter);
    }
    else{

    products = await getProducts();}
    res.status(200).json(
        {
            success: true,
            message: "Products fetched successfully",
            data: products
        }
    )
}
catch(error){
    res.status(500).json(
        {
            success: false,
            message: "Error in fetching products",
            error: error.message
        }
        )
    }
}
 const addProductController = async (req, res) => {
  try {
     const errors = validationResult(req);
        if(!errors.isEmpty()){
          return (
            res.status(400).json({success: false, errors: errors.array()}) // return status code 400 cause its client error
          )
        }

    const {name,description,price, countInStock, category, image,images } = req.body;

    const product = await addProduct(name,description,price, countInStock, category, image,images);

    res.status(201).json({
            success: true,
            message: "Products added successfully",
            data: product
        });
  } catch (error) {
     res.status(500).json(
        {
            success: false,
            message: "Error in adding products",
            error: error.message
        }
        )
    }}
    const getProductsByIdsController = async(req,res)=>{
try {

            const{ ids }=req.body;
            if(!id ||  !Array.isArray(ids)|| ids.length === 0){
                return res.status(400).json({message:"Invalid or Empty ids array"})
}
                const products =await getProductsByIds(ids);
                res.status(200).json(products)
        } catch  (error) {
            
            res.status(500).json({ message: error.message });
        }
    }

   

    
module.exports= {addProductController,getProductsController,getProductsByIdsController}