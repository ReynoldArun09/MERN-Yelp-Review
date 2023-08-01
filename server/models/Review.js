const mongoose = require('mongoose')

var reviewSchema = new mongoose.Schema({
    username:{
        type:String,
        required: true
        
    },
    comment:{
        type:String,
        required:true
        
    },
    restaurant: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Restaurant'
    },
    createdDate: {
        type: Date,
        default: Date.now
    },
})


const Review = mongoose.model('Review', reviewSchema)
module.exports = Review