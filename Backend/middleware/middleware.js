// import jwt from "jsonwebtoken";
// import userModel from "../model/userShema.js";

// export const userMiddleware = async (req, res, next) => {
//     try {
//         const token = req.headers.authorization;
//         console.log(token, "token");

//         if (!token) {
//             return res.json({
//                 success: false,
//                 status: 400,
//                 message: "No token provided",
//                 body: {},
//             });
//         } else {
//             const tokenSplit = token.split(" ")[1];
//             console.log(tokenSplit, "Token extracted");

//             const decodedID = jwt.verify(tokenSplit, process.env.secretKey);
//             console.log(decodedID, "Decoded ID");

//             const userDetails = await userModel.findById(decodedID.id);
//             if (!userDetails) {
//                 return res.json({
//                     success: false,
//                     status: 400,
//                     message: "User not found. Please log in again.",
//                     body: {},
//                 });
//             }

//             if (userDetails.token !== tokenSplit) {
//                 return res.json({
//                     success: false,
//                     status: 400,
//                     message: "Token mismatch. Please log in again.",
//                     body: {},
//                 });
//             }

//             req.user = userDetails;  // Attach user details to the request object
//             next();  // Proceed to the next middleware/route handler
//         }
//     } catch (error) {
//         console.error(error);
//         return res.json({
//             success: false,
//             status: 500,
//             message: "Internal server error",
//             body: {},
//         });
//     }
// };

import jwt from "jsonwebtoken"
import userModel from "../model/userShema.js"

export const userMiddleware = async (req, res, next) => {

    try {
        console.log(req.headers, "req.headers")
        const token = req.headers.authorization
        console.log(token, "token")
        if (!token) {
            return res.json({
                success: false,
                status: 400,
                message: "No token found",
                body: {}
            })


        }
        else {
            const tokenSplit = token.split(" ")[1]
            console.log(tokenSplit, "tokenSplit")

            const decodeId = jwt.verify(tokenSplit, process.env.secretKey)
            console.log(decodeId, "id")

            const userDetails = await userModel.findById({ _id: decodeId.id })
            console.log(userDetails, "userDetails")

            if (userDetails.token != tokenSplit) {
                return res.json({
                    success: false,
                    status: 400,
                    message: "please login again",
                    body: {}
                })

            }
            else {
                req.user = userDetails
                next()
            }
        }



    } catch (error) {
        console.log(error, "error")
    }
}