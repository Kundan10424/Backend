


import mongoose from "mongoose";

 export const connectDB = async() => {
    try {

        const conn = await mongoose.connect(process.env.MONGO_URI, { 
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        
    } catch (error) {
         console.error(`Error in Connecting to DB, ${error.message}`)
         process.exit(1) 
    }
}