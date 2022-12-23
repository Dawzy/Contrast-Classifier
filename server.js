// Load dependecies
import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./db/db.js";

// Load routers
import dataRouter from "./routes/dataRoutes.js";

// Load environment variables
dotenv.config();

// Connect to database
connectDB();

// App initializations
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
if (process.env.NODE_ENV === "development") app.use(morgan("dev")); // Logging middleware

app.use(express.json());

// Mount routers
app.use("/api/v1/data", dataRouter);

// Entry
const server = app.listen(
	PORT,
	console.log(`Running in ${process.env.NODE_ENV} on port: ${PORT}`)
);

// Handle unhandled promise rejections
process.on("unhandledRejection", (err, promise) => {
	// Log error
	console.log(`Error: ${err.message}`);

	// Close server and exit process on unhandled rejections
	server.close( () => process.exit(1) );
});