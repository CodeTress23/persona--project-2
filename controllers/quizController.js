const Quiz = require('../models/quizModel');

const getQuiz = async (req, res, next ) => {
    try {await 
    Quiz.find({})
    .then((quiz) => 
    res.status(200).json({
        success: { message: 'Found Quiz'},
        data: quiz,
        statusCode:200    }))
    }catch(error) {
        res.status(400).json({error: {message: 'Something went wrong getting the quiz'}, statusCode: 400})
    }
};

module.exports = {getQuiz}