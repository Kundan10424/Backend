
import User from "../models/user.model.js"
import { registerUser, loginUser } from "../service/user.service.js"

export const signup = async(req, res) => {

    const{username, password} = req.body

    const existingUser = await User.findOne({username})

    if(existingUser){
        return res.status(400).json({
            message: "User already exists"
        })
    }

    if(!username || !password){
        return res.status().json({
            success: false,
            message: "username and password are required"
        })
    }

    try {
        const newUser = await registerUser({username, password})
        await newUser.save()

    return res.status(201).json({
        success: true,
        message: "User Created Successfully",
        data: [newUser]
    })
        
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal Server Error",
            error: error.message
        })
        
    }


}

export const login = async(req, res) => {
    const {username, password} = req.body

    const existingUser = await User.findOne({username})

    if(!existingUser){
        res.status(400).json({
            success: false,
            message: "User Not Found"
        })
    }

    try {

        const user = await loginUser({username, password})

        req.session.userId = user._id;

        res.status(200).json({
            success: true,
            message: "User logged in successfully",
            data: user
        });
        

        
    } catch (error) {
        res.status(500).json({
            success: false,
            // message: "Internal Server Error",
            error: error.message
        })
        
    }
}



export const logout = async(req, res) => {

    try {

        req.session.destroy()
        res.status(200).json({
            success: true,
            message: "User Logged Out Successfully"
        })
        
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal Server Error",
            error: error.message
        })
        
    }

}

