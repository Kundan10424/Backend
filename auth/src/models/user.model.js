


import {mongoose, Schema} from "mongoose";

const UserSchema = new Schema({

    username: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true,
        minlength: 8 
    }
}, {timestamps: true})

export const User = mongoose.model('User', UserSchema);

export default User

