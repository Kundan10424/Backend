
import {readTask, writeTask} from "../utils/task.utils.js"

export const getAllTasks = async(req, res) => {
    if(!req.session || !req.session.user) {
        return res.status(401).json({message: "Unauthorized"});
    }

    const task = await readTask();
    res.json(task.filter((task) => task.username === req.session.user.username));
}

export const createTask = async(req, res) => {
    const {title, description} = req.body
    const task = await readTask();

    const newTask = {
        id: task.length + 1,
        username: req.session.user.username,
        title,
        description,
        completed: false,
    
    }

    task.push(newTask);
    await writeTask(task);  

    res.status(201).json(newTask);
}

export const updateTask = async (req, res) =>  {
    const {id} = req.params
    const {title, description, completed} = req.body;

    if(!title || !description || completed === undefined) {
        return res.status(400).json({message: "All fields are required"});
    }

    if(!req.session || !req.session.user){
        return res.status(401).json({message: "Unauthorized"});
    }

    const task = await readTask()

    const taskIndex = task.findIndex((task) => {
        return task.id === parseInt(id) && task.username === req.session.user.username;

    })

    if(taskIndex === -1){
        return res.status(404).json({message: "Task not found"});
    }

    if(title !== undefined){
        task[taskIndex].title = title;
    }
    if(description !== undefined){
        task[taskIndex].description = description;
    }
    if(completed !== undefined){
        task[taskIndex].completed = completed;
    }

    await writeTask(task);
    res.status(200).json(`Task with ID ${id} updated successfully`);
    res.json(task[taskIndex]);

}

export const deleteTask = async( req, res) => {
    const {id} = req.params;

    if(!req.session || !req.session.user){
        return res.status(401).json({message: "Unauthorized"});
    }

    const task = readTask();

    const taskIndex = task.findIndex((task) => {
        return task.id === parseInt(id) && task.username === req.session.user.username;
    })

    if(taskIndex === -1){
        return res.status(404).json({message: "Task not found"});
    }

    const deleteTask = task.splice(taskIndex, 1)[0]

    await writeTask(task);

    res.status(200).json({
        message: `Task with ID ${id} deleted successfully`,
        task: deleteTask
    })
}