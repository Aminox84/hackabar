require('dotenv').config();
require('./config/db.config')
const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser');
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}))


const authRoute = require('./routes/auth.route');
const userRoute = require('./routes/user.route');
const pokemonRoute = require('./routes/pokemon.route');
const pokemonsRoute = require('./routes/pokemons.route');
app.use('/', authRoute);
app.use('/', userRoute);
app.use('/pokemon', pokemonRoute);
app.use('/pokemons', pokemonsRoute);




const ports = process.env.PORT || 8080;
app.listen(ports, console.log(`Server is running on port ${ports}`));

