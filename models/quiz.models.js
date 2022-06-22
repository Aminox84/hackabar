const mongoose = require('mongoose');

const QuizSchema = mongoose.Schema({

    
    results: [
        {
            question: {
                type: String,
                required: true
            },
            correct_answer: {
                type: String,
                required: true
            },
            incorrect_answers:{
                type: String,
                required: true
            },
            doc:{
                type:String,
                required: true
            }
        }
    ]

})

module.exports = mongoose.model('Quiz', QuizSchema);