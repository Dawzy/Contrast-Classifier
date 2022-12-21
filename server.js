import express from "express";
import dotenv from "dotenv";

// Environment variables
dotenv.config();

// Initialize
const app = express();
const PORT = process.env.PORT;

// Routes
app.get("/", (req, res) => res.send("Hello, world!"));
app.post("/data", (req, res) => res.send("Taken."));

// Entry
app.listen(PORT, () => console.log(`Running in ${process.env.NODE_ENV} on port: ${PORT}`));