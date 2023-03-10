import bcrypt from 'bcryptjs'
import User from "../models/User.js"
import { createError } from '../utils/error.js';
import jwt from 'jsonwebtoken'

export const register = async (req, res, next) => {
	const {username, email, password} = req.body;

	const hash = await bcrypt.hashSync(password, 10);

	try {
		const newUser = new User({
		username,
		email,
		password: hash
	})

	await newUser.save();
	res.status(200).send('New user has been created');
	} catch (e) {
			return next(e)
	}
	
}
export const login = async (req, res, next) => {
	const {username} = req.body;

	try {
		const user = await User.findOne({username})

		if(!user) return next(createError(404, 'Username or password is incorrect'))

		const isPasswordCorrect = await bcrypt.compareSync(req.body.password, user.password)

		if(!isPasswordCorrect) return next(createError(404, "Username or password is incorrect"))

		const {isAdmin, password, ...otherDetails} = user._doc;

		const token = jwt.sign({id: user._id, isAdmin: user.isAdmin}, process.env.JWT)

		res
		.cookie("token", token, {
			httpOnly: true,
		})
		.status(200)
		.json({details: {otherDetails}, isAdmin})

	} catch (e) {
			return next(e)
	}
}