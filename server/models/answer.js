/**
File name: Answer.js
Author: COMP308 Group 3
Website name: Its Survey
Description: the model file which models the schema for survey answer 
*/
let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let answerSchema = mongoose.Schema ({ 
    surveyID: Schema.Types.ObjectId,
    surveyTopic : String,
    user: Schema.Types.ObjectId,
    questions:{ type: Array, default:[]}
});


//Ready to go
module.exports = mongoose.model('answer', answerSchema);