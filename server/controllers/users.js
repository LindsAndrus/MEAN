console.log('made it to BE users controller');
var mongoose = require('mongoose');
var Users = mongoose.model('users');

module.exports = (function() {
  return {
    // EXAMPLE OF GET (INDEX) METHOD //
    index: function(req, res) {
      Users.find({}, function(err, results) {
        if(err) {
          console.log(err);
        } else {
          // console.log(results, "hey");
          res.json(results);
        }
      })
    }, // END INDEX

    // EXAMPLE OF CREATE (POST) METHOD //
    new:function(req, res){
      var user = new Users({name: req.body.name});
      // console.log(req.body);
      user.save(function(err){
        if(err){
          console.log("errors")
        }
        res.json(user)
      })
    }, //END CREATE

  } //END RETURN
})();
