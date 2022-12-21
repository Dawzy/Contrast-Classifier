import express from "express";
import { testNetwork, trainNetwork } from "../Controllers/NeuralNetworkController.js";

const router = express.Router();

router.get("/test", testNetwork);
router.post("/train", trainNetwork);

export default router;