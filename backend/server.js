import express from "express";
import products from "./data/products.js";
import dotenv from 'dotenv';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 8000;

app.get('/', (req, res) => { 
    res.send('welcome to the root')
})

app.get('/api/products', (req, res) => { 
    res.json(products)
})

app.get('/api/products/:id', (req, res) => { 
    const product = products.find((e) => e._id == req.params.id)
    console.log(product)
    res.send(product)
})

app.listen(PORT, console.log(`Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`))

