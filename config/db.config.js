require('dotenv').config();
const mongoose = require('mongoose');

var db = mongoose
    .connect(
        process.env.db,
        { useNewUrlParser: true, useUnifiedTopology: true }
    )
    .then(() => {
        console.log("Success, connected to database")
    })
    .catch((err) => console.log(`Could not connect to database server`, err));

module.exports = db;