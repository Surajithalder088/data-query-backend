const express=require("express")
const userRouter=require('./routes/user')
const queryRoutes=require('./routes/query')
const cookieParser=require("cookie-parser")


const app=express()
const port=4400

app.use(express.json())

app.use(cookieParser())
app.use("/api/user",userRouter)
app.use('/api',queryRoutes)

app.get("/",(req,res)=>{
    res.send("hii")
})

app.listen(port,()=>{
    console.log('server running on ',port);
    
})