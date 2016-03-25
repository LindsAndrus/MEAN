console.log("made it to the model")

var mongoose = require('mongoose');

var Persons = new mongoose.Schema({
  name: String
});

mongoose.model('Persons', Persons);
