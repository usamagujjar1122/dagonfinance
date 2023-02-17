const mongoose = require('mongoose')

const depositModel = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users",
        require: true,
      },
    status : {
        type: String,
    },
    amount: {
        type:Number,
    },
    package:{
        type:String,
    },
    method:{
        type:String,
    },
    profit:{
        type:String,
    },
    TrxID:{
        type:String,
    },
    createdat:{
        type:Date,
        default:Date.now
    }
})

const Deposit = mongoose.model('Deposits',depositModel)

module.exports = Deposit