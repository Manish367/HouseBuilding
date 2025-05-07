import { imageUploadForUsers } from "../helper/imageUpload.js"
import tokenGenerate from "../jwt/tokenCreate.js"
import userModel from "../model/userShema.js"
import bcrypt from 'bcrypt'
export const signUp = async (req, res) => {
    try {
        const emailfind = await userModel.findOne({ email: req.body.email })
        console.log(emailfind, "emailfind")
        if (emailfind) {
            return res.json({
                success: false,
                status: 400,
                message: "email already exist",
                body: {}
            })
        }
        else {

            console.log(req.files, "hellooo")
            if (req.files && req.files.image.name) {
                const image = req.files.image
                if (image) {
                    req.body.image = imageUploadForUsers(image, "userImages")
                }
            }
            const passwordEnc = await bcrypt.hash(req.body.password, 10)
            let data = await userModel.create({ ...req.body, password: passwordEnc, image: req.body.image })
            console.log(data, "data")

            const tokenG = await tokenGenerate(data._id)
            console.log(tokenG, "token")
            data.token = tokenG.token
            data.loginTime = tokenG.varify.iat
            await data.save()
            return res.json({
                success: true,
                status: 200,
                message: "user created successfully",
                body: data
            })
        }

    }
    catch (error) {
        console.log("error", error)
    }
}

export const logIn = async (req, res) => {

    try {
        const finddata = await userModel.findOne({ email: req.body.email })

        console.log(finddata, "finddata")

        if (!finddata) {
            return res.json({
                success: false,
                status: 400,
                message: "Email is not found",
                body: {}

            })
        }
        const findpassword = await bcrypt.compare(req.body.password, finddata.password)


        if (!findpassword) {
            return res.json({
                success: false,
                status: 400,
                message: "login failedd",
                body: {}

            })
        }

        const tokenG = await tokenGenerate(finddata._id)
        console.log(tokenG, "token")
        finddata.token = tokenG.token
        finddata.loginTime = tokenG.varify.iat
        finddata.save()
        if (!tokenG) {
            return res.json({
                success: false,
                status: 400,
                message: "login failedddd",
                body: {}

            })
        }
        else {

            return res.json({
                success: true,
                status: 200,
                message: "login successfully",
                body: finddata

            })
        }




    }
    catch (error) {
        console.log("error", error)
    }
}
//find all user 
export const finduser = async (req, res) => {

    try {
        const data = await userModel.find()
        console.log(data, "data")
        return res.json({
            success: true,
            status: 200,
            message: " here are all users ",
            body: data
        })
    } catch (error) {
        console.log(error, "error")
    }
}

//find singleUserByBody

export const singleUserByBody = async (req, res) => {

    try {
        console.log(req.user)
        const data = await userModel.findById({ _id: req.body.id })
        return res.json({
            success: true,
            status: 200,
            message: " here is single users ",
            body: data
        })
    } catch (error) {
        console.log(error)
    }
}

export const myProfile = async (req, res) => {
    try {
        const dataaa = await userModel.findById({ _id: req.user._id })
        return res.json(dataaa)
    } catch (error) {
        console.log(error)
    }
}
//find singleUserByParams
export const singleUserByParams = async (req, res) => {

    try {

        const data = await userModel.findById({ _id: req.params.id })
        console.log(data, "data")
        return res.json({
            success: true,
            status: 200,
            message: " here is single user by using params ",
            body: data
        })
    } catch (error) {
        console.log(error, "error")
    }
}

export const update = async (req, res) => {
    try {
        const updateData = await userModel.findByIdAndUpdate({ _id: req.params.id }, { ...req.body }, { new: true })
        return res.json({
            success: true,
            status: 200,
            message: " user updated successfully ",
            body: updateData
        })
    } catch (error) {

        console.log(error, "error")
    }
}

export const dataDelete = async (req, res) => {
    try {
        const deletedata = await userModel.deleteOne({ _id: req.params.id })
        console.log(deletedata, "deletedata")
        return res.json({
            success: true,
            status: 200,
            message: " data deleted successfully ",
            body: deletedata
        })

    } catch (error) {
        console.log(error, "error")
    }
}