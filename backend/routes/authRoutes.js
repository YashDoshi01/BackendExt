import express from "express";
import signupController from "../controllers/authControllers/signup.js";
import userLogin from "../controllers/authControllers/login.js";
import userDetails from "../controllers/authControllers/userDetails.js"
const userAuthRouter = express.Router()


userAuthRouter.post("/signup" ,signupController)
userAuthRouter.post("/login" , userLogin)
userAuthRouter.post("/user" , userDetails)

export default userAuthRouter