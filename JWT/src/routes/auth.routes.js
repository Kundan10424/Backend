


import express from "express"
import jwt from "jsonwebtoken"

import User from "../model/user.model.js"


const router = express.Router()

router.post('/signUp', async(req, res) => {

    const {username, password} = req.body

    try {
        const existingUser = await User.findOne({username})

        if(existingUser){
            return res.status(400).json({
                message: "User already exists."
            })
        }

        if(!username || !password){
            return res.status(400).json({
                success: false,
                message: "Username and password is required"
            })
        }

        const newUser =  new User({
            username,
            password
        })

        await newUser.save()

        return res.status(201).json({
            success: true,
            message: "User Created SuccessFully",
            data: [newUser]
        })

    } catch (error) {
         res.status(500).json({
            sucess: false,
            message: "Internal server Error",
            error: error.message
         })
        
    }
})

router.post('/login', async(req, res) => {
    const {username, password} = req.body;


    try {

        const existingUser = await User.findOne({username})

        if(!existingUser){
            res.status(400).json({
                success: false,
                message: "User Not Found"
            })
        }

        const user = await User.findOne({username})

        if(!user){
            return res.status(401).json({
                sucess: false,
                message: "Invalid username or password"
            })
        }

        const isMatch = await user.comparePassword(password)

        if(!isMatch){
            return res.status(400).json({
                success: false,
                message: "Invalid username or password"
            })
        }

        const token = jwt.sign({
            id: user._id,
            username: user.username
        }, process.env.JWT_SECRET,{expiresIn:"1h"})

        res.status(200).json({
            success: true,
            message:"Login successfull",
            token
        })
        
    } catch (error) {
         res.status(500).json({
            sucess: false,
            message: "Internal server Error",
            error: error.message
         })
    }
})



export default router