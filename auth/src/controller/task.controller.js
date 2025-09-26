
import {CreateTask, fetchTasks} from "../service/task.service.js"

export const addtask = async(req, res) => {

    const{title, description,completed} = req.body

    try {

        const task = await CreateTask(req.session.userId, title, description,completed)

        if(!task){
            return res.status(400).json({
                success: false,
                message: "Failed to add task"
            })
        }

        res.status(201).json({
            success: true,
            message: "Task Created Successfully",
            data: [task]
        })
        
    } catch (error) {

        res.status(500).json({
            success: false,
            message: "Internal Server Error",
            error: error.message
        })        
    }

   

}


export const gettask = async(req, res) => {

    try {
        const tasks = await fetchTasks(req.session.userId);

        if (!tasks || tasks.length === 0) {
            return res.status(404).json({
                success: false,
                message: "No tasks found"
            })
        }

        res.status(200).json({
            success: true,
            message: "Tasks retrieved successfully",
            data: tasks
        })
        
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal Server Error",
            error: error.message
        })
        
    }
     
}