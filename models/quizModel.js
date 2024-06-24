const mongoose = require('mongoose');

const {Schema} = mongoose;

const quizSchema = new Schema({
    questions: [
        {
            question: {
                type: String,
                required: true,
            },
            options: {
                a: {
                    type: String,
                    required: true,
                },
                b: {
                    type: String,
                    required: true,
                },
            }
        },
    ],  
});

const Quiz = mongoose.model('Quiz', quizSchema);

module.exports = Quiz;