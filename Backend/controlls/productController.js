import { imageUploadForUsers } from "../helper/imageUpload.js";
import productSchema from "../model/productModels.js"

export const productCreate = async (req, res) => {
    try {
        if (req.files && req.files.image.name) {
            const image = req.files.image;
            if (image) {
                req.body.image = imageUploadForUsers(image, "productImage")
            }
            const data = await productSchema.create({ ...req.body, image: req.body.image })

            return res.json(data)
        }


    } catch (error) {
        console.log(error, "productError")
    }
}

export const getAllproduct = async (req, res) => {
    try {
        const data = await productSchema.find()

        const productsWithImgUrl = data.map(product => ({
            ...product.toObject(),
            imgUrl: `http://localhost:${process.env.Server}/images/productImage/${product.image}`
        }));

        console.log(productsWithImgUrl, "productsWithImgUrl");

        return res.json({
            success: true,
            status: 200,
            message: "Here are all products",
            body: productsWithImgUrl
        });
    } catch (error) {
        console.log(error, "error")
    }
}

export const findOneProduct = async (req, res) => {
    try {
        const data = await productSchema.findById({ _id: req.body.id })
        return res.json({
            success: true,
            status: 200,
            message: " here is single product ",
            body: data
        })
    } catch (error) {
        console.log(error)

    }
}

export const findOneProductByParams = async (req, res) => {
    try {
        const data = await productSchema.findById(req.params.id);
        return res.json({
            success: true,
            status: 200,
            message: " here is single product using params",
            body: data
        })
    } catch (error) {
        console.log(error)

    }
}

export const update = async (req, res) => {
    try {
        const data = await productSchema.findByIdAndUpdate({ _id: req.params.id }, { ...req.body }, { new: true })
        return res.json({
            message: "user hasbeen updated successfully",
            status: 200,
            success: true,
            body: data
        })
    } catch (error) {
        console.log(error, "error")
    }
}

export const deleteProduct = async (req, res) => {
    try {
        const data = await productSchema.deleteOne({ _id: req.params.id })
        console.log(data, "data")
        return res.json({
            message: "product hasbeen deleted successfully",
            status: 200,
            success: true,
            body: data
        })

    } catch (error) {
        console.log(error, "error")
    }
}