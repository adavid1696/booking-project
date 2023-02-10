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

// if there is an error once connected to the db
mongoose.connection.on('disconnected', () => {
	console.log('mongoDB disconnected!')
})
mongoose.connection.on('connected', () => {
	console.log('mongoDB connected!')
})

// middlewares
app.use(express.json())

app.use('/api/auth', authRoute)
app.use('/api/users', usersRoute)
app.use('/api/hotels', hotelsRoute)
app.use('/api/rooms', roomsRoute)

app.use((req,res,next) => {
	console.log('hi i am a middleware')
})

app.listen(8800, () => {
	connect()
	console.log('Connected to backed!')
})