
import mongoose, {Schema} from "mongoose";
const UserSchema = new Schema({
 name: String,
    email:{
     type: String,
        require:[true , "Email is require"]
    },
    password:{
     type: String,
        require: [true , "Password is require"]
    },
    about:String,
    profileURTL: String
    // address:{
    //  street:String,
    //  city:String,
    //  country:String,
    //  pinCode:Number,
    // },
    // profileUrl: []
})


export const User = mongoose.models.users  || mongoose.model("users" ,UserSchema);