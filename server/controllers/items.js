console.log('made it to BE items controller');
var mongoose = require('mongoose');
var Items = mongoose.model('items');

module.exports = (function() {
  return {
    // EXAMPLE OF GET (INDEX) METHOD //
    index: function(req, res) {
      Items.find({}, function(err, results) {
        if(err) {
          console.log(err);
        } else {
          res.json(results);
        }
      })
    }, // END INDEX

    // EXAMPLE OF CREATE (POST) METHOD //
    new:function(req, res){
      var item = new Items({title: req.body.title, description: req.body.description, name: req.body.user_id});
      item.save(function(err){
        if(err){
          console.log("errors")
        }else{
          res.redirect('/');
        }
      })
    } //END CREATE
  } //END RETURN
})();
