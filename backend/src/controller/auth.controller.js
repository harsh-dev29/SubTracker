import userModel from "../models/user.model.js";
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import { sendWelcomeEmail } from './../utils/email.js';


export async function registerUser(req, res) {
    try {
        const { email, password, fullName = {
            firstName: req.body["fullName.firstName"],
            lastName: req.body["fullName.lastName"],
        } } = req.body
        const profile = req.file

        const isUserAlreadyExists = await userModel.findOne({ email })

        if (isUserAlreadyExists) {
            return res.status(400).json({ messag: 'User alreaady exists' })
        }


        const hash = await bcrypt.hash(password, 10)

        const user = await userModel.create({
            email,
            password: hash,
            fullName,
            profile
        })


        const token = jwt.sign({
            id: user._id,
            fullname: user.fullName
        }, process.env.JWT_SECRET,)

        res.cookie("token", token, {
            httpOnly: true,
            secure: true, // Always true for Render/Production
            sameSite: 'none', // Required for cross-site cookies
            maxAge: 24 * 60 * 60 * 1000
        })
        // const newUser = user;
        // const savedUser = await newUser.save();
        try {
            sendWelcomeEmail(user)
            .then(() => console.log("Email sent successfully"))
            .catch((err) => console.log("Email failed:", err));

        } catch (error) {
            console.error('error in email sevice ', error)
        }

        res.status(201).json({
            message: 'User registered successfully',
            user: {
                id: user._id,
                email: user.email,
                fullname: user.fullName
            }
        })
    } catch (error) {

    }
}

export async function loginUser(req, res) {

    const { email, password } = req.body

    const user = await userModel.findOne({ email })

    if (!user) {
        return res.status(400).json({
            message: "Invalid email or password"
        })
    }

    const isPasswordValid = await bcrypt.compare(password, user.password)

    if (!isPasswordValid) {
        return res.status(400).json({
            message: "Invalid email or password"
        })
    }

    const token = jwt.sign({
        id: user._id,
        email: user.email,
        fullname: user.fullName
    }, process.env.JWT_SECRET)


    res.cookie('token', token, {
        httpOnly: true,
        secure: true, // Always true for Render/Production
        sameSite: 'none', // Required for cross-site cookies
        maxAge: 24 * 60 * 60 * 1000
    })


    res.status(201).json({
        message: "User logged In successfully",
        user: {
            id: user._id,
            fullname: user.fullName,
            email: user.email
        }
    })
}

export async function getUser(req, res) {
    try {
        const user = req.user;

        // If your middleware works correctly, req.user should exist.
        // But this check is a great "safety net".
        if (!user) {
            return res.status(401).json({
                success: false,
                message: "Unauthorized - No user found"
            });
        }

        // Use 200 for fetching data
        res.status(200).json({
            success: true,
            message: 'User fetched successfully',
            user: {
                id: user.id,
                fullname: user.fullname,
                email: user.email
            }
        });
    } catch (error) {
        console.error("Error in getUser controller:", error);
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
}

export async function logoutUser(req, res) {

    try {
        res.cookie("token", '', {
            httpOnly: true,
        })
        res.status(200).json({
            message: "user logout successfully",
        })
    } catch (error) {

    }


}

export async function User(req, res) {
    res.status(200).json({
        success: true,
        user: req.user
    });

}
