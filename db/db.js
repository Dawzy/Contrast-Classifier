import mongoose from "mongoose";

mongoose.set('strictQuery', true); // Avoid warning

const connectDB = async () => {
	// Get connection promise
	// MONGO_URI already loaded from .coonfig() in server.js
	const connection = await mongoose.connect(process.env.MONGO_URI, {
		// Avoid console warnings
		useNewUrlParser: true
	});

	// Logging
	console.log(`MongoDB Connected: ${connection.connection.host}`);
}

export default connectDB;