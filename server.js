require('dotenv').config();
require('./config/db.config')
const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser');
const app = express();
app.use(cors());
app.use(express.urlencoded({extended: true}))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



const authRoute = require('./routes/auth.route');
const userRoute = require('./routes/user.route');

app.use('/', authRoute);
app.use('/', userRoute);





const ports = process.env.PORT || 8080;
app.listen(ports, console.log(`Server is running on port ${ports}`));

