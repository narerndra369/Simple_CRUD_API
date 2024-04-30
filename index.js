const express = require('express')
const mongoose = require('mongoose')
const Product = require('./models/product.model.js');
const productRoute = require('./routes/product.route.js');
const app=express();

app.use(express.json());

app.use(express.urlencoded({extended: false}));
//routes
app.use('/resource',productRoute);



mongoose.connect("mongodb://localhost:27017")
.then(() => {
    console.log("connected to database!");
    app.listen(3000,()=>{
        console.log("Server is running at 3000");
    });
})
.catch(() => {
    console.log("Not connected");
})