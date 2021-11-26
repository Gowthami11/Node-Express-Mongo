import {Router} from 'express'
import userSchema from "../models/userSchema"
import {createPerson,login,getAccessfromRefreshToken} from "../controller/controller";
import {authentication,authRefreshToken} from "../middleware/auth"
import jwt from 'jsonwebtoken'
const {REFRESH_TOKEN}=process.env
const router=Router();
const response=[
    'gow','test','ragnee','akash'
]
router.get('/routerget',(re,res)=>{
    res.send('router send')
})

router.get("/name/:id",(req,res)=>{  
    const {id}=req.params;
    res.json(response[id])

})
//with body
router.get('/name',(req,res)=>{
    const {id}=req.body;
    res.send(response[id])
})
// router.post("/getNames",(req,res)=>{
    
//     res.status(200).json(response)
// })
//post data to mongodb
router.post('/create',async(req,res)=>{
    createPerson(req,res)

})

router.get("/getNames",authentication,async(req,res)=>{
    const data=await userSchema.find({});
    res.json(data)
});
//get access token from refreshtoken
router.post('/accessToken',(req,res)=>{
    getAccessfromRefreshToken(req,res)

})

router.get("/login",(req,res)=>{
    login(req,res)
})


module.exports=router