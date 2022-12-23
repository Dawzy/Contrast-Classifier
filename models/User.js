import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcrypt";

const UserSchema = new mongoose.Schema({
	username: {
		type: String,
		required: [true, 'Please provide a name.'],
		minlength: 3,
		maxlength: 20,
		trim: true,
	  },

	email: {
		type: String,
		required: [true, "Please add an email."],
		unique: true,
		trim: true,
		validate: {
			validator: validator.isEmail,
			message: "Please enter a valid email."
		}
	},

	password: {
		type: String,
		required: [true, "Please add a password."],
		select: false // Avoid returning the password when querying
	},

});

export default { UserSchema };