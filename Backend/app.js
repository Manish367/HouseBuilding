import express from 'express'
import dotenv from 'dotenv'
import dbConnection from './dataConnect/dbConnection.js'
import userRouter from './routes/userRouter.js'
import fileUpload from 'express-fileupload'
// import path from 'path';  // Import path module
import path from "path";
import { fileURLToPath } from "url";
import cors from "cors"
import productRouter from './routes/productRouter.js'
import contactrouter from './routes/contactRouter.js'
const app = express()
dotenv.config()
const port = process.env.Server
dbConnection()
app.use(cors())
// const __dirname = path.dirname(new URL(import.meta.url).pathname);

// Set up __dirname equivalent in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// app.use(express.static(path.join(__dirname, 'public')));

// Set up static file serving
app.use('/images', express.static(path.join(__dirname, 'public/images')));
app.use(express.json())
app.use(fileUpload())
app.use('/contact', contactrouter);
app.use('/product', productRouter)
app.use('/user', userRouter)





app.listen(port, (() => {
    console.log(`server is running on ${port}`)
})

)