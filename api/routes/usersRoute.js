import express from 'express'
import { deleteUser, getAllUsers, getUser, updateUser } from '../controllers/userController.js'
import { verifyAdmin, verifyUser, verifyToken } from '../utils/verifyToken.js'

const router = express.Router();

// router.get("/checkauthentication", verifyToken, (req, res, next) => {
// 	res.send('Hello user, you are logged in.')
// })
// router.get("/checkuser/:id", verifyUser, (req, res, next) => {
// 	res.send('Hello user, you are logged in and can delete your account')
// })
// router.get("/checkadmin/:id", verifyAdmin, (req, res, next) => {
// 	res.send('Hello Admin, you are logged in and can delete all accounts')
// })

//UPDATE
router.put("/:id", verifyUser, updateUser)

//DELETE
router.delete("/:id", verifyUser, deleteUser)

//GET
router.get("/:id", verifyUser, getUser)

//GET ALL
router.get("/", verifyAdmin, getAllUsers)

export default router