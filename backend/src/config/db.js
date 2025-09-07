import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
	const MONGO_URI = process.env.MONGO_URI;
    if (!MONGO_URI) {
        console.error("Error: MONGO_URI is not defined in environment variables. Please check your .env file.");
        process.exit(1);
    }
	try {
		await mongoose.connect(MONGO_URI)
		console.log("mongoDB connected successfully!")
	} catch (error){
		console.error("Error connecting to mongoDB", error)
		process.exit(1)
	}
}

export default connectDB;