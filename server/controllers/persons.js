console.log('made it to the back-end controller');

var mongoose = require('mongoose');
var Persons = mongoose.model('Persons');

module.exports = (function(){
  return {
    allpeeps:function(req,res){
      Persons.find({}, function(err,people){
        if (err){
          res.json(err);
        }
        else {
          res.json(people);
        };
      });
    }, //end of index function
    new:function(req,res){
      // console.log(req.params.name);
      var person = new Persons({name: req.body.name})
      person.save(function(err){
        if(err){
          console.log('error');
        }else{
          console.log('success');
          res.json(person);
        };
      });
    }, //end of new function
    remove:function(req,res){
      console.log(req.body.name);
      Persons.remove({name: req.body.name}, function(err){
        if(err){
          console.log('error');
        }else{
          console.log('success');
          res.json(req.body);
        }
      });
    } //end of remove function
  }//end of return object
})();
