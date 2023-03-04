import mongoose from "mongoose";
const {Schema} =mongoose;
const signinSchema =new Schema({
    Name:{
        type:String,
        trim:true,
        required:true
    },
Surname:{
    type:String,
    trim:true,
    required:true
},
Email:{
    type:String,
    trim:true,
    required:true
},
PhoneNumber:{
        type:String,
        trim:true,
        required:true
    },
Password:{
        type:String,
        trim:true,
        required:true
    },

})
export default mongoose.model("Signin",signinSchema);