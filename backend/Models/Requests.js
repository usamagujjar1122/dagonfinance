const mongoose = require('mongoose')

const requestModel = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users",
        require: true,
      },
    amount: {
        type:Number,
    },
    username: {
        type:String,
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
    status:{
        type:String,
    },
    createdat:{
        type:Date,
        default:Date.now
    }
})

const Request = mongoose.model('Requests',requestModel)

module.exports = Request