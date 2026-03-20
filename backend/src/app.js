import express from 'express'
import authRoutes from './routes/auth.routes.js'
import subRoutes from './routes/subRoutes.route.js'
import cookieParser from 'cookie-parser'
import cors from 'cors'


const app = express()

app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE']
}))

app.use('/api/auth', authRoutes)
app.use('/api/sub', subRoutes)

export default app