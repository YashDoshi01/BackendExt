import express from "express";
import cors from "cors"
import ConnectMongo from "./db_connection.js"
import userAuthRouter from "./routes/authRoutes.js";
import uploadRouter from "./routes/uploadRoutes.js";

const app = express()

app.use(express.urlencoded())
app.use(express.json())
app.use(cors())

app.use("/api/auth" , userAuthRouter)
app.use("/api/upload" , uploadRouter)


ConnectMongo()
.then(()=>{
    app.listen(8000 ,()=>{
        console.log("Server up on port 8000")
    } )
})
.catch((err)=>{
    console.log("some error while creating the server")
})