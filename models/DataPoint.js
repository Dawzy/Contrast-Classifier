import mongoose from "mongoose";
import ColorSchema from "./ColorSchema.js";

// Generic Data Point used for training
const DataPointSchema = new mongoose.Schema({
	background: {
		type: ColorSchema,
		required: true
	},

	foreground: {
		type: ColorSchema,
		required: true
	},

	visiblityScore: {
		type: Number,
		required: true,
		enum: [ 0, 1, 2 ]
	}
});

export default DataPointSchema;