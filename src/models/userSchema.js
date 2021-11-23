import mongoose from "mongoose"
const UserShema=mongoose.Schema({
    name:{type:String,require:true},
    email:{type:String,require:true},
    cr_date:{type:Number,default:Date.now}
})
// wrappinng schema with model
export default mongoose.model('User',UserShema)