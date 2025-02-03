const mongoose=require("mongoose")
const connectDb=async()=>{
try{
   await mongoose.connect(process.env.mongodb_url , {
   
  })
  console.log(`server connected on ${mongoose.connection.host}`)
}
catch(err){
    console.log(`${err}`)
}
}
module.exports=  connectDb;
