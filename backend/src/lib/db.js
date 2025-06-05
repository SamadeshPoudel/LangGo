import mongoose from "mongoose";

export const connectDB=async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("connected to MongoDB")
    } catch (error) {
        console.log("Error connecting to mongodb", error);
        process.exit(1); //1 means failure
    }
}