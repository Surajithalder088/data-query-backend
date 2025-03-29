const  authenticate=async(req,res,next)=>{

   const token= req.cookies.auth_token

   if(!token){
    res.status(403).json({message:"Unauthorized"})
    return
   }
   next()
}

module.exports=authenticate