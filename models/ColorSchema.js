import mongoose from "mongoose";

// Generic Color used for data points
const ColorSchema = new mongoose.Schema({
	r: {
		type: Number,
		required: true,
		min: 0,
		max: 255,
		default: 255
	},

	g: {
		type: Number,
		required: true,
		min: 0,
		max: 255,
		default: 255
	},

	b: {
		type: Number,
		required: true,
		min: 0,
		max: 255,
		default: 255
	},
});

export default ColorSchema;