const express =require("express")
const cors=require("cors")
const morgan=require("morgan")
const dotenv=require("dotenv")
const colors=require("colors")
const  connectDb = require("./config/connectdb.js")
const app=express()
app.use(morgan('dev'))
app.use(express.json())
app.use(cors())
dotenv.config()
connectDb()
// app.get('/',(req,res)=>{
//     res.send("<h1>hello</h1>")
// })
app.use('/api/v1/users',require('./routes/userRoute.js')) 
app.use('/api/v1/transactions', require('./routes/transactionRoutes.js'));

const port=8080||process.env.port
app.listen(port,()=>{
    console.log(`server running on ${port}`)
})