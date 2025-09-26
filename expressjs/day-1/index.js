


import express from "express";
import {data} from "./data/data.js";
const PORT = 5000;

const app = express()

app.use(express.json()) // Middleware to parse JSON request body

//* 1. GET Request(it is for fetching the data form server)

app.get("/", (req,res)=>{
    res.status(200).send("Hello World!")
})



// INdustry Standard
app.get("/api/v1/users", (req, res)=>{
    res.status(200).send(data)
    console.log(req.query)
})

// Query parameters

app.get("/api/v1/users/:id", (req, res)=>{
    const {id} = req.params
    const user = data.find((user) => user.id === parseInt(id))
    if(!user){
        return res.status(404).send("USER NOT FOUND")
    }
    res.status(200).send(user)
})

//* 2. POST Request(it is for creating the data in server)
app.post("/api/v1/users", (req, res)=>{
    const {name, age} = req.body

    const newUser = {
        id: data.length + 1,
        name,
        age
    }

    data.push(newUser)

    res.status(201).send({
        message: "User Created Successfully",
        data: newUser
    })
})

//* 3. PUT Request(it is for updating the data in server, UPDATE ALL FIELDS)
app.put("/api/v1/users/:id", (req, res)=>{
    const {id} = req.params
    const {name, age} = req.body

    const userIndex = data.findIndex((user) => user.id === parseInt(id))

    if(userIndex === -1){
        return res.status(404).send("USER NOT FOUND")
    }
    data[userIndex] = {
        id: parseInt(id),
        name,
        age

    }


    res.status(200).send({
        message: "User Updated Successfully",
        data: data[userIndex]
    })

//* 4. PATCH Request(it is for updating the data in server, UPDATE SOME SPECIFIC FIELDS)

})

app.patch("/api/v1/users/:id", (req, res)=>{
    const {id} = req.params
    const {name, age} = req.body

    const userIndex = data.findIndex((user) => user.id === parseInt(id))

    if(userIndex === -1){
        return res.status(404).send("USER NOT FOUND")
    }
    data[userIndex] = {
        ...data[userIndex], // Spread operator to keep the existing data
        name,
        age
    }


    res.status(200).send({
        message: "User Updated Successfully",
        data: data[userIndex]
    })
})



//* 5. DELETE Request(it is for deleting the data in server)

app.delete("/api/v1/users/:id", (req, res) => {
    const {id} = req.params

    const userIndex = data.findIndex((user) => user.id === parseInt(id))

    if(userIndex === -1){
        returnres.status(404).send("USER NOT FOUND")

    }

    const deletedUser = data.splice(userIndex, 1)

    res.status(200).send({
        message: "User Deleted Successfully",
        data: deletedUser[0 ]
    })
})

app.listen(PORT, ()=>{
    console.log(`Server is listening on Port ${PORT}`)
})
