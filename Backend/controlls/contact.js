import Contact from "../model/ContactSchema.js"

export const contactCreate = async (req, res) => {
    try {
        const data = await Contact.create(req.body)
        console.log(data, "data")
        return res.json({
            message: "contact created successfully",
            status: 200,
            success: true,
            body:data
        })
    } catch (error) {
        console.log(error,"error")
    }
}

export const getAllContactDetails = async (req, res) => {
    try {
        const data = await Contact.find()
        console.log(data, "data")
        return res.json({
            message: "here all information",
            status: 200,
            success: true,
            body: data
        })
    } catch (error) {
        console.log(error, "error")
    }
}

export const getSingleDetailByID = async (req, res) => {
    try {
        const data = await Contact.findById({ _id: req.body.id })
        return res.json({
            success: true,
            status: 200,
            message: " here is single user ",
            body: data
        })
    } catch (error) {
        console.log(error, "error")
    }
}

export const contactDelete= async(req, res) => {
    try {
        const deletedata = await Contact.deleteOne({ _id: req.params.id })
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
