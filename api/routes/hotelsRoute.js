import express from 'express'
import { createHotel, deleteHotel, getAllHotels, getHotel, updateHotel } from '../controllers/hotelController.js'
import { verifyAdmin } from '../utils/verifyToken.js'

const router = express.Router()


router.post('/', verifyAdmin, createHotel)
router.put('/:id', verifyAdmin, updateHotel)
router.get('/', getAllHotels)
router.get('/:id', getHotel)
router.delete('/:id', verifyAdmin, deleteHotel)

export default router