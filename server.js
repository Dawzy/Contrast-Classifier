// Load dependecies
import express from "express";
import dotenv from "dotenv";

// Load routers
import nnRouter from "./routes/NeuralNetworkRoutes.js";

// Load environment variables
dotenv.config();

// App initializations
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Mount routers
app.use("/api/v1/nn", nnRouter);

// Entry
app.listen(PORT, () => console.log(`Running in ${process.env.NODE_ENV} on port: ${PORT}`));