import express from "express";
import dotenv from 'dotenv';
import connectDB from "./config/db.js";
import colors from 'colors';
import productRoutes from "./routes/productRoutes.js";
import { notFound, errorHandler } from './middleware/errorMiddleware.js'
import userRoutes from "./routes/userRoutes.js";
dotenv.config();

connectDB();

const app =new express();
const PORT = process.env.PORT || 8000;

app.use(express.json());

app.get('/', (req, res) => { 
    res.send('welcome to the root')
})


app.use('/api/products/', productRoutes);
app.use('/api/users/', userRoutes)

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, console.log(`Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold))

