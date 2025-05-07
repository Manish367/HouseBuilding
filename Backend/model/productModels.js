import mongoose from "mongoose";

const productDetails = new mongoose.Schema({
    title: { type: String, default: "" },
    subTitle: { type: String, default: "" },
    image: { type: String, default: "" },
    categary: { type: String, default: "" },
    price: { type: Number, default: 0 },
    productType:{type:Number,enum:[0,1,2],default:0}
})

const productSchema = new mongoose.model("product", productDetails)
export default productSchema;