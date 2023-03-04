import mongoose from "mongoose";
const {Schema} =mongoose;
const loginSchema =new Schema({
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
export default mongoose.model("Login",loginSchema);