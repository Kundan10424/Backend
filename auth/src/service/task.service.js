


import {Task} from "../models/task.model.js"

export const CreateTask = async(userId, title, description, completed) => {

    try {
        const task = new Task({
        userId,
        title,
        description,
        completed 
    })

     return await task.save()
        
    } catch (error) {
        throw new Error(`Error in task Creation: ${error.message}`)
    }

}

export const fetchTasks = async(userId) => {

    try {
        const tasks = await Task.find({ userId }).sort({ createdAt: -1 });

        return tasks

    } catch (error) {
        throw new Error(`Error fetching tasks: ${error.message}`)
        
    }
}