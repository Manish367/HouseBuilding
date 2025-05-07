import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        name: { type: String, default: "" },
        email: { type: String, default: "" },
        password: { type: String, default: "" },
        image: { type: String, default: "" },
        token: { type: String, default: "" },
        loginTime: { type: Number, default: 0 },
        role: {type: String, enum: ['user', 'admin'], default: 'user' },
    },
    { timestamps: true }
)

const userModel = new mongoose.model("user", userSchema)
export default userModel;


