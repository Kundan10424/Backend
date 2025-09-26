


import {mongoose, Schema} from "mongoose"

const taskSchema = new Schema({

    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },

    title:{
        type: String,
        required: true
    },

    description:{
        type: String,
        required: true
    },

    completed: {
        type: Boolean,
        required: true
    }
}, {timestamps: true})

export const Task = mongoose.model("Task", taskSchema)
export default Task
