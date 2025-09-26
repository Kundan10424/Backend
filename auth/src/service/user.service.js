
import bcrypt from "bcrypt"
import {User} from "../models/user.model.js"

export const registerUser = async({username, password}) => {

    // Hash the password
    const hashedPassword = await bcrypt.hash(password , 10);

    // Create a new user instance
    const newUser = new User({
        username,
        password: hashedPassword
    });
    // Save the user to the database
    return await newUser.save();


    

}

export const loginUser  = async ({username, password}) => {

    const user = await User.findOne({username})
    if(!user) throw new Error("User not found")

    const isMatch = await bcrypt.compare(password, user.password)

    if(!isMatch) throw new Error("Invalid password")

    return user

}

