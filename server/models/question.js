/**
File name: Question.js
Author: COMP308 Group 3
Website name: Its Survey
Description: the model file which models the schema for question 
*/
let mongoose = require('mongoose');

let Schema = mongoose.Schema;
let answer = new Schema ({ answer : String });

    let questionSchema = mongoose.Schema({
        questionTopic : String,
        questionAns : [{ answer : String }],
        type : Number
    });

//Ready to go
module.exports = mongoose.model('question', questionSchema);