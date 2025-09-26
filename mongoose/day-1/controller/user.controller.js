
import User from "../models/user.models.js";


export const createUser = async(req, res) => {
    try{

        // getting data from client side
        const {name, age, weight} = req.body
        // creating a new user
        const newUser = new User({
            name,
            age,
            weight
        })

        // saving the user to the database
        await newUser.save();
        res.status(201).json({success: true, data: newUser, message: "User created successfully!"});


    } catch(err){
        res.status(500).json({success: false, message: err.message});
    }

}

export const getUsers = async(req, res) => {
    try{
        // fetching all users from the database
        const users = await User.find();
        res.status(200).json({success: true, data: users, message: "Users fetched successfully!"});

    }catch(err){
        res.status(500).json({success: false, message: err.message});
    }
}

// delete user

export const deleteUser = async(req, res) => {
    try{
        const {id} = req.params

        // deleting user from the database
        const deletedUser = await User.findByIdAndDelete(id);
        // if user not found
        if(!deletedUser){
            return res.status(404).json({success: false, message: "User not found!"});
        }

        res.status(200).json({success: true, data: deletedUser, message: "User deleted successfully!"});

    }catch(err){
        res.status(500).json({success: false, message: err.message});
    }
}

// update user
export const updateUser = async(req, res) => {
    try{
        const {id} = req.params;
        const {name, age, weight} = req.body;
        // updating user in the database
        const updatedUser = await User.findByIdAndUpdate(id, {
            name,
            age,
            weight
        }, {new: true, runValidators: true});

        if(!updatedUser){
            return res.status(404).json({success: false, message: "User not found!"});
        }

        res.status(200).json({success: true, data: updatedUser, message: "User updated successfully!"});

    }catch(err){
        res.status(500).json({success: false, message: err.message});
    }
}