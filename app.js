require('dotenv').config();
const express = require('express');
const server = require('./server');
const mongoose = require('mongoose');



const entrepriseRoutes = require('./routes/entreprise.route');


var db = mongoose
    .connect(
        `mongodb+srv://ESTIAM-brochure:ESTIAM-brochure@cluster0.i47bo.mongodb.net/projet-brochure?retryWrites=true&w=majority`,
        { useNewUrlParser: true, useUnifiedTopology: true }
    )
    .then(() => {
        console.log("Success")
    })
    .catch((err) => console.log(`Could not connect to database server`, err));

server.use(express.urlencoded({
    extended: true
}))

server.use('/certifications', entrepriseRoutes);
