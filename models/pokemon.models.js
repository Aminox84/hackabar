const { ObjectId } = require('bson');
const mongoose = require('mongoose');


const PokemonSchema = mongoose.Schema({
    _id: {
        type: ObjectId,
        required: true
    },
    id:{
        type: Number,
        required: true
    },
    price:{        type: Number,
        required: true},
    name: {
        english: {
            type: String,
            required: true
        },
        japanese: {
            type: String,
            required: true
        },
        french: {
            type: String,
            required: true
        }
      },
      type: [
        {
            type: String,
            required: true
        }
      ],
      base: {
        HP: {
            type: Number,
            required: true
        },
        Attack: {
            type: Number,
            required: true
        },
        Defense: {
            type: Number,
            required: true
        },
        "Sp. Attack": {
            type: Number,
            required: true
        },
        "Sp. Defense": {
            type: Number,
            required: true
        },
        "Speed": {
            type: Number,
            required: true
        }
      }
    }
);




module.exports = mongoose.model('Pokemon', PokemonSchema);