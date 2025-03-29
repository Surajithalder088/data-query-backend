const express =require("express")
const {PrismaClient}=require("@prisma/client")

const router=express.Router()
const prisma=new PrismaClient()

router.post('/login',async(req,res)=>{
 try {
    const {email,password}=req.body
    const user =await prisma.users.findUnique({
        where:{
            email:email
        }
    })
    if(!user){
        res.status(404).json({message:"no user found"})
        return
    }
    if(user.password!==password){
        res.status(401).json({message:"incorrect password"})  // for production we use encrypt to encrypt password but here just for basic funttions 
        return
    }
    res.cookie("auth_token",user,{
        httpOnly:true,
        secure:false ,
        maxAge:60*60*1000,
        sameSite:"none"
    })
    res.status(200).json({message:"login success",user})

    
 } catch (error) {
    res.status(500).json({message:"internal server error",error})
 }

})

router.post('/signup',async(req,res)=>{

    try {
     const {email,password}=req.body
    const user =await prisma.users.findUnique({
        where:{
            email:email
        }
    })
    if(user){
        res.status(404).json({message:"user already exist"})
        return
    }
    const newUser =await prisma.users.create({
        data:{
            email:email,
            password:password
        }
    })
    if(!newUser){
        res.status(400).json({message:"failed to ctreate user"})
        return
    }
    res.cookie("auth_token",newUser,{
        httpOnly:true,
        secure:false ,
        maxAge:60*60*1000,
        sameSite:"none"
    })
    res.status(200).json({message:"signup success",newUser})

 } catch (error) {
    res.status(500).json({message:"internal server error",error})
 }

})

router.post('/all',async(req,res)=>{

   
    const user =await prisma.users.find({})
    if(!user){
        res.status(404).json({message:"something wrong"})
        return
    }
    if(user.length==0){
        res.status(404).json({message:"no user found"})
        return
    }
    res.status(200).json({message:"all users",user})


})



module.exports=router;