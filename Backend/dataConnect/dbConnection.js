import mongoose from "mongoose";

const dbConnection = async () => {
    await mongoose.connect(process.env.MongoURL)
    console.log("database connected")
}
export default dbConnection
