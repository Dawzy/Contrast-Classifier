import express from "express";
import { getDataPoints, addDataPoint } from "../controllers/dataController.js";

const router = express.Router();

router.get("/", getDataPoints);
router.post("/", addDataPoint);

export default router;