
const User = require('../Models/User')
const insertUser = (firstName,  username, email, password,phoneNumber) => {

  return {
    user: username,
    user:firstName,
    user:email,
user:phoneNumber,
user:password,
  };
};

const signupUser = async(username, password, firstName, lastName, email,phoneNumber,city)=>{
try{
    const newUser = new User({
username, 
password, 
firstName,
 lastName,
  email,
  phoneNumber,
  city
    });

   await newUser.save(); // talking with db

   return {
    success: true,
    message: "User created successfully",
    data: {user: username}
   };
}
catch(err){
    throw new Error('Error creating user: ' + err.message); // throwing error to controller
}

}

const loginUser = async (username,password) =>{
    try{
    // search the database for the user with the given username and password
    const user= await User.findOne({username: username, password: password});

    if(!user){
        // throw error to controller
        throw new Error('Invalid username or password');
    }


    return {
        user_id: user._id,
        username: user.username
    }
}catch(err){
  throw new Error('Error logging in: ' + err.message); // throwing error to controller
}
}

module.exports={insertUser,signupUser,loginUser}
