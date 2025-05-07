import express from 'express'
import { deleteProduct, findOneProduct, findOneProductByParams, getAllproduct, productCreate, update } from '../controlls/productController.js'
const productRouter = express.Router()
productRouter.post("/productCreate", productCreate)
productRouter.get('/getAllproduct', getAllproduct)
productRouter.post('/findOneProduct', findOneProduct)
productRouter.get('/findOneProductByParams/:id', findOneProductByParams)
productRouter.put('/update/:id', update)
productRouter.delete('/delete/:id', deleteProduct)


export default productRouter