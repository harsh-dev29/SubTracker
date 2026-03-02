import mongoose from 'mongoose'
import { config as configDotenv } from 'dotenv';
configDotenv()
export default async function connectDb() {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Connected to DB");

    } catch (error) {
        console.log("error while connecting to db");
        console.log(error);
    }
}