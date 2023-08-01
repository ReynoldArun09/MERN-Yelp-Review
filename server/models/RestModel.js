const mongoose = require('mongoose')


var restaurantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    
  },
  location: {
    type: String,
    required: true,
  },
  rating: {
    type: String,
    min: 1,
    max: 5,
  },
  reviews: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Review",
    },
  ],
});

const RestModel = mongoose.model('Restaurant', restaurantSchema)
module.exports = RestModel