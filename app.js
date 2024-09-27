import express from 'express'

import cookieParser from 'cookie-parser'
import cors from 'cors'
import userRouter from './routes/userRoutes.js'


const app = express()

app.use(cors())

app.use(express.json({limit:'16kb'}))
app.use(express.urlencoded({extended:true,limit:'16kb'}))
app.use(express.static("public"))
app.use(cookieParser())

app.use("/api/users",userRouter)

export {app}