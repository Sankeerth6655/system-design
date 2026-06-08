import dotenv from 'dotenv';
dotenv.config();

import { app } from './app';
import { connectDB } from './config/db';

const PORT = process.env.PORT || 4500;

const startServer = async()=>{
    try {
        await connectDB();

        app.listen(PORT,()=>{
            console.log(`Server connected on :: http://localhost:${PORT}`);
        })
    } catch (error) {
        console.log("Failed to start server",error);
        process.exit(1);
    }
}

startServer();

// Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2YTIxNDU4YjY4NGI0ZWE4Njg4Njk2NDciLCJpYXQiOjE3ODA2NTg5NjJ9.7-bQhod5AOXd61Fe1Bw74hXwu8y8_gwdVMQredhvHIs