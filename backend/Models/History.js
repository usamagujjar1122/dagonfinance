const mongoose = require('mongoose')

const historyModel = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users",
        require: true,
      },
    type : {
        type: String,
    },
    amount: {
        type:Number,
    },
    createdat:{
        type:Date,
        default:Date.now()
    }
})

const History = mongoose.model('History',historyModel)

module.exports = History