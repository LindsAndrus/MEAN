console.log("made it to the users model")

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var usersSchema = new mongoose.Schema(
  {
    name: {
      type: String
    },
    item_added: [{
      type: Schema.Types.ObjectId,
      ref: "title"
    }]
  },
  {
    timestamps: true
  }
);

usersSchema.path('name').required(true, 'Name cannot be blank');

mongoose.model('users', usersSchema);
