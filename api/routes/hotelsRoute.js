import express from 'express'
import { createHotel, deleteHotel, getAllHotels, getHotel, updateHotel } from '../controllers/hotelController.js'
import Hotel from '../models/Hotel.js'

const router = express.Router()


router.post('/', createHotel)
router.put('/:id', updateHotel)
router.get('/', getAllHotels)
router.get(':id', getHotel)
router.delete('/:id', deleteHotel)

export default router