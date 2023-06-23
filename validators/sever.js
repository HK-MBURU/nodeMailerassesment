const express=require('express')

const app=express()
app.use(express.json)

const emailRouter=require('../routes/emailRoutes')
app.use(emailRouter)

const port=process.env.PORT ||4000
app.listen(port,()=>{
    console.log(`sever is loading ${port}`);
})