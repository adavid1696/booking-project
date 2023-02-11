import express from 'express'
import { createHotel, deleteHotel, getAllHotels, getHotel, updateHotel } from '../controllers/hotelController.js'
import { verifyAdmin } from '../utils/verifyToken.js'

const router = express.Router()

// CREATE
router.post('/', verifyAdmin, createHotel)
// UPDATE
router.put('/:id', verifyAdmin, updateHotel)
// GET ALL
router.get('/', getAllHotels)
// GET ONE
router.get('/:id', getHotel)
// DELETE
router.delete('/:id', verifyAdmin, deleteHotel)

export default router