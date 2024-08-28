import express from 'express'
import pino from 'pino-http'
import config from './config/config'
import { SpotifyAuthRouter } from './spotify/infrastructure/http/SpotifyAuthRouter'
import { AuthRouter } from './auth/infrastructure/http/AuthRouter'

const app = express()

// Logger
app.use(pino())

// Request parsers
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Health route
app.get('/health', (_req, res) => res.status(200).send())

app.get('/', (_req, res) => res.send('login worked'))

// spotify auth router
app.use('/api/spotify/auth', SpotifyAuthRouter)

// auth router
app.use('/api/auth', AuthRouter)

app.listen(3000, function () {
   console.log('Server running on port 3000')
})
