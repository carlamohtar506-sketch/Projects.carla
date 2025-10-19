const mongoose = require ('mongoose');
const orderSchema =new mongoose.Schema ({
    
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'userModule',
        required:true
    },
 itemprice:{
    type:Number,
    required:true
 },
 totalPrice:{
    type:Number,
    required:true,
 },
 shippingPrice:{
      type:Number,
    required:true,
 },
 shippingAdress:{
adress:{type:String,required:true},
fullname:{type:String,required:true},
    city:{type:String,required:true},
    country:{type:String,required:true}
    
},
  orderItems: [
        {
            product: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Product',
                required: true
            },
            quantity: {
                type: Number,
                required: true},
            price: {
                type: Number,
                required: true
            },
            name: {
                type: String,
                required: true
            }
        }
    ],
 })
  
const Order=mongooose.model('Order',orderSchema)
module.exports=Order;