import express from 'express'
import * as authController from "../controller/auth.controller.js"
import { authMiddleware } from './../middlewares/auth.middleware.js';
import multer from 'multer'


const upload = multer({
    storage: multer.memoryStorage()
})


const router = express.Router()
//POST /api/auth/register
router.post('/register', upload.single('profile'), authController.registerUser)

//POST /api/auth/login
router.post('/login', authController.loginUser)

//GET /api/auth/user
router.get('/user', authMiddleware, (req, res) => {
    // If it gets here, the middleware passed!
    res.status(200).json({
        success: true,
        user: req.user
    });
})

router.get('/logout', (req, res) => {
    try {
        res.cookie("token", '', {
            httpOnly: true,
        })
        res.status(200).json({
            message: "user logout successfully",

        })
    } catch (error) {

    }
})


export default router