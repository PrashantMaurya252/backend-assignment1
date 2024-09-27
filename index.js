import { app } from "./app.js"
import connectDB from "./utils/connectDB.js"
import dotenv from 'dotenv'




dotenv.config({
    path:'./.env'
})

connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000,() => {
        console.log(`server is running at port ${process.env.PORT}`)
        app.on('error',()=>{
            console.log("ERROR occured here",error)
            throw error
        })
    })
})
.catch((err)=>{
    console.log("MongoDB connection failed !!!",err)
})