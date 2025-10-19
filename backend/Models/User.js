const mongoose=require('mongoose')
const userSchema=new mongoose.Schema(
    {
            username: {
        type: String,
        required: true,
        unique:true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName:{
        type: String,
        required: true
    },

    password:{
        type:String,
required:true,
    },
    email:{
        type: String,
        required: true,
        unique:true
    },
    phoneNumber: {
        type: String,
        required: true,
        unique:true
    },
    city: {
        type: String,
        required: false
    }
    });
const User = mongoose.model('User', userSchema);// save it in db
module.exports = User; // accesss in backend