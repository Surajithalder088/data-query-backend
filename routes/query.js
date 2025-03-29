const express =require("express")
const {PrismaClient}=require("@prisma/client")
const QueryRes=require('../mockQueryRes')
const authenticate=require('./middleware')

const router=express.Router()
const prisma=new PrismaClient()

router.post('/query',authenticate,async(req,res)=>{
    const {question}=req.body
    try {
        if(!question){
            res.status(400).json({message:"question required"})
            return
        }
        // finding the best matches for the given question ,here we are using mock response data, but in real product real data fetching from database will be executed

        const lowerQuestion=question.toLowerCase()
        let matchedQuery=Object.keys(QueryRes).find(key=>lowerQuestion.includes(key))

        if(!matchedQuery){
            res.status(404).json({message:"Unsupported query type"})
            return
        }
        res.status(200).json(QueryRes[matchedQuery])
    } catch (error) {
        res.status(500).json({message:"internal server error",error})
    }
})

router.post('/explain',authenticate,async(req,res)=>{
    const {question}=req.body
    try {
        if(!question){
            res.status(400).json({message:"question required"})
            return
        }
        // finding the best matches for the given question ,here we are using mock response data, but in real product real data fetching from database will be executed

        const lowerQuestion=question.toLowerCase()
        let matchedQuery=Object.keys(QueryRes).find(key=>lowerQuestion.includes(key))

        if(!matchedQuery){
            res.status(404).json({message:"Unsupported query type"})
            return
        }
        res.status(200).json({
            intent:matchedQuery,
            sqlQuery:QueryRes[matchedQuery].sqlQuery,
            explanation:QueryRes[matchedQuery].explanation,
        })
    } catch (error) {
        res.status(500).json({message:"internal server error",error})
    }
})

router.post('/validate',authenticate,async(req,res)=>{
    const {question}=req.body
    try {
        if(!question){
            res.status(400).json({message:"question required"})
            return
        }
        // finding the best matches for the given question ,here we are using mock response data, but in real product real data fetching from database will be executed

        const lowerQuestion=question.toLowerCase()
        const isValid=Object.keys(QueryRes).some(key=>lowerQuestion.includes(key))
        res.status(200).json({valid:isValid})
       
    } catch (error) {
        res.status(500).json({message:"internal server error",error})
    }
})




module.exports=router;