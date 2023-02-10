import Hotel from "../models/Hotel.js"

export const createHotel = async (req, res, next) => {

	const newHotel = new Hotel(req.body)

	try {
		const savedHotel = await newHotel.save();
		res.status(200).json(savedHotel)
	} catch (error) {
			return next(error)
	}

}
export const updateHotel = async (req, res, next) => {

	try {
		const updatedHotel = await Hotel.findByIdAndUpdate(
			req.params.id, 
			// what you will update in the db
			{ $set: req.body }, 
			// this will update postman with the new value to show in json obj
			{ new: true }
		);
		res.status(200).json(updatedHotel)
	} catch (error) {
			return next(error)
	}

}
export const deleteHotel = async (req, res, next) => {

	try {
		await Hotel.findByIdAndDelete(
			req.params.id, 
		);
		res.status(200).json('Hotel has been deleted!')
	} catch (error) {
			return next(error)
	}

}
export const getHotel = async (req, res, next) => {

	try {
		const hotel = await Hotel.findById(
			req.params.id
		);
		res.status(200).json(hotel)
	} catch (error) {
			return next(error)
	}

}
export const getAllHotels = async (req, res, next) => {
	
	try {
		const hotels = await Hotel.find();
		res.status(200).json(hotels)
	} catch (error) {
			return next(error)
	}

}