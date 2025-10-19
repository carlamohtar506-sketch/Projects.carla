const express = require('express')
const app = express ();
const db =require('./Config/Config')
app.use(express.json());
const PORT = 3000;
app.listen(PORT, ()=>{
    console.log("Server is running on port ",PORT)
})
const userRoutes = require('./Routes/userRoutes.js')
app.use('/users', userRoutes);
const productRoutes = require('./Routes/productRoutes.js')
app.use('/products', productRoutes);


const cors = require("cors");

// Allow requests from frontend
app.use(cors({
  origin: "http://localhost:5173",  // your frontend URL
  methods: ["GET", "POST", "PUT", "DELETE"], // allowed methods
  credentials: true
}));

const orderRoute = require('./Routes/orderRoute')
//app.use('/orders',orderRoute)
module.exports= userRoutes;
