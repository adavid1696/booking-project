import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'

// Routes
import authRoute from './routes/authRoute.js'
import usersRoute from './routes/usersRoute.js'
import roomsRoute from './routes/roomsRoute.js'
import hotelsRoute from './routes/hotelsRoute.js'

const app = express()
dotenv.config()

// making the connection to the db
async function connect() {
  await mongoose.connect(process.env.MONGO);
	console.log('Connected to mongoDB')
}

app.use('/api/auth', authRoute)
app.use('/api/users', usersRoute)
app.use('/api/hotels', hotelsRoute)
app.use('/api/rooms', roomsRoute)

app.listen(8800, () => {
	console.log('Connected to backed!')
})