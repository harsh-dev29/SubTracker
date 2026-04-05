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
    origin: function (origin, callback) {
        if (!origin || allowedOrigins.indexOf(origin) !== -1) {
            callback(null, true)
        } else {
            callback(new Erro("Not allowed by CORS"))
        }
    },
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE']
}))

app.use('/api/auth', authRoutes)
app.use('/api/sub', subRoutes)

export default app