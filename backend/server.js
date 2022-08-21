import express from "express";
import products from "./data/products.js";
import dotenv from 'dotenv';
import connectDB from "./config/db.js";
import colors from 'colors';
import productRoute from "./routes/productRoute.js";
import { notFound, errorHandler } from './middleware/errorMiddleware.js'
dotenv.config();

connectDB();

const app = express();
const PORT = process.env.PORT || 8000;

app.get('/', (req, res) => { 
    res.send('welcome to the root')
})


app.use('/api/products/', productRoute);

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, console.log(`Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold))

