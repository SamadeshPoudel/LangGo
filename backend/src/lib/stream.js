import {StreamChat} from "stream-chat"
import dotenv from "dotenv"
dotenv.config();

const apiKey = process.env.STREAM_API_KEY;
const apiSecret = process.env.STREAM_API_SECRET;

if(!apiKey || !apiSecret){
    console.log("Stream API key or secret is missing")
}

const streamClient = StreamChat.getInstance(apiKey, apiSecret);

//upsert here means create or update the user
export const upsertStreamUser = async (userData) =>{
    try {
        await streamClient.upsertUsers([userData]); 
        return userData;
    } catch (error) {
        console.log("Error upserting stream user:", error);
    }
}

export const generateStreamToken = (userId)=>{
    try {
        //ensure user id is a string
        const userIdStr = userId.toString();
        return streamClient.createToken(userIdStr);
    } catch (error) {
        console.log("Error generating stream token:", error);
    }
}