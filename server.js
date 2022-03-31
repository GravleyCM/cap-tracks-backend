import 'dotenv/config.js'
import express from 'express'
import logger from 'morgan'
import cors from 'cors'

import { router as profilesRouter } from './routes/profiles.js'
import { router as authRouter } from './routes/auth.js'
import { router as linesRouter } from './routes/line.js'
import { router as stationTimingsRouter } from './routes/stationTimings.js'
import { router as ticketsRouter } from './routes/tickets.js'

import('./config/database.js')

const app = express()  

app.use(cors())
app.use(logger('dev'))
app.use(express.json())

app.use('/api/profiles', profilesRouter)
app.use('/api/auth', authRouter)
app.use('/api/lines', linesRouter)
app.use('/api/timetables', stationTimingsRouter)
app.use('/api/tickets', ticketsRouter)

app.use(function (req, res, next) {
  res.status(404).json({ err: "Not found" })
})

app.use(function (err, req, res, next) {
  res.status(err.status || 500).json({ err: err.message })
})

export { app }
