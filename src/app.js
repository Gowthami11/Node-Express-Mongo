import express from 'express';
import cors from 'cors'
import mongoose from 'mongoose';
import users from "./routes/users"
const PORT=5000
const app=express();
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use("/user",users);
const DB="mongodb+srv://gowthami:Mongodb81!@cluster0.krdtg.mongodb.net/nodeExpress";
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    }
mongoose.connect(DB,options)
.then(()=>console.log('Connection successfull'))
.catch((err)=>console.log('connection failed',err));

app.get("/",(req,res)=>{
    res.send('welcome to get api')

})

app.get("/name",(req,res)=>{
    res.send([{name:'gowthami'}])
})
app.listen(PORT,()=>{
    console.log('running on port',PORT)
})
