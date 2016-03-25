var mongoose = require('mongoose');
var path = require('path');
var Persons = require('./../controllers/persons.js');

module.exports = function(app){
  app.get('/people', Persons.allpeeps);
  app.post('/person/new', Persons.new);
  app.post('/person/remove', Persons.remove);
};
