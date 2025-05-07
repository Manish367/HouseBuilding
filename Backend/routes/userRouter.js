import express from 'express'
import { finduser, logIn, myProfile, signUp, update, dataDelete } from "../controlls/userController.js"
import { singleUserByBody, singleUserByParams } from '../controlls/userController.js'
import {userMiddleware} from "../middleware/middleware.js"
const userRouter = express.Router()
userRouter.post("/signUp", signUp)
userRouter.post("/logIn", logIn)
userRouter.get("/find",userMiddleware, finduser)
userRouter.post("/singleUserByBody", userMiddleware, singleUserByBody)
userRouter.get("/myProfile", userMiddleware, myProfile)
userRouter.get("/singleUserByParams/:id", singleUserByParams)
userRouter.put("/update/:id", update)
userRouter.delete("/dataDelete/:id", dataDelete)


export default userRouter





















































// import express from 'express'
// import {  signUp } from '../controlls/userController.js'
// import { login } from '../controlls/userController.js'
// const userRouter = express.Router()
// userRouter.post("/signUp", signUp)
// userRouter.post("/login", login)

 
// export default userRouter;
// import userModel from "../model/userShema.js"
// import bcrypt from "bcrypt"

// export const signUp = async (req, res) => {
//     try {
        
//         const passwordInc=await bcrypt.hash(req.body.password,10)
//         const data = await userModel.create({ ...req.body, password: passwordInc })
//         console.log("data ", data)
//         return res.json({
//             success: true,
//             status: 200,
//             message: "user created successfully",
//             body: data
//         })
//     }
//     catch (error) {
//         console.log(error, "error")
//     }
// }

// export const login = async (req, res) => {
//     try {
//         const findData = await userModel.findOne({ email: req.body.email, password: req.body.password })
//         console.log("findData", findData)
//         if (!findData) {
//             return res.json({
//                 success: false,
//                 status: 400,
//                 message: "email id is not found",
//                 body: {}
//             })
//         }
//         else {
//             return res.json({
//                 success: true,
//                 status: 200,
//                 message: "LogIn Successful",
//                 body: findData
//             })
//         }



//     }
//     catch (error) {
//         console.log("error", error)
//     }
// }

// export const Update = () => {
//     try {
        
//     }
//     catch (error) {
        
//     }
// }