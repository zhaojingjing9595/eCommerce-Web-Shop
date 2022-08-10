import express from "express";
import products from "./data/products.js";

const app = express();
const PORT = 8000;

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

app.listen(PORT, console.log(`server is listening at port ${PORT}`))

