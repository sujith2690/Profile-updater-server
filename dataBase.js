import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const URL = process.env.MongoURL
const connection = async () => {
    try {
        await mongoose.connect(URL, { useNewUrlParser: true })
        console.log('DB connection established')
    } catch (error) {
        console.log(error.message, '------Db connection failed')
    }
}

export default connection
