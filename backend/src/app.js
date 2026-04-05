import express from 'express'
import authRoutes from './routes/auth.routes.js'
import subRoutes from './routes/subRoutes.route.js'
import cookieParser from 'cookie-parser'
import cors from 'cors'


const app = express()

const allowedOrigins = [
    'https://sub-tracker-one.vercel.app', // Your Live Production URL
]

app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin: 'https://sub-tracker-one.vercel.app',
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE']
}))

app.use('/api/auth', authRoutes)
app.use('/api/sub', subRoutes)

export default app