console.log("made it to the items model")

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var itemsSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      length: {
        minimum: 5
      }
    },
    description: {
      type: String,
      length: {
        minimum: 10
      }
    },
    _name: {
      type: [{
        type: Schema.Types.ObjectId,
        ref: 'name'
      }],
      default: []
    }
  },
  {
    timestamps: true
  }
);

itemsSchema.path('title').required(true, 'Title cannot be blank');
itemsSchema.path('description').required(true, 'Description cannot be blank');

mongoose.model('items', itemsSchema);
