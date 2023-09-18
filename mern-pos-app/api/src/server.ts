import express from "express"
import mongoose from "mongoose";
import dotenv from 'dotenv';
const app = express()
const PORT = 5000;

dotenv.config();
const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI as string)
        console.log('Connected to mongoDB')
    } catch (error) {
        throw error
    }
}
app.get('/', (req, res) => {
    res.send('Hello World')
});

app.listen(PORT, () => {
    connect();
    console.log('Server Running on port: ' + PORT)
})