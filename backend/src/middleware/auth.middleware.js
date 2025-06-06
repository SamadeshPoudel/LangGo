import jwt, { decode } from "jsonwebtoken";
import User from "../models/User.js";

export const protectedRoute = async(req, res, next)=>{
    try {
        const token = req.cookies.jwt;
        if(!token){
          return res.status(401).json({msg:"Unauthorized - No token provided"});
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
        
        if(!decoded){
            return res.status(401).json({msg:"Unauthorized - Invalid Token"})
        }

        const user = await User.findById(decoded.userId).select("-password");

        if(!user){
            return res.status(401).json({msg:"Unauthorized - User not found"})
        }

        req.user = user;
        
        next();
    } catch (error) {
        console.log("Error in protect route middleware", error);
        res.status(500).json({msg:"Internal server error"})
    }
}