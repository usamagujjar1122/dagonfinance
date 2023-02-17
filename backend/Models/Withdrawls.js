const mongoose = require('mongoose')

const withdrawlModel = new mongoose.Schema({
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
    method:{
        type:String,
    },
    username:{
        type:String,
    },
    createdat:{
        type:Date,
        default:Date.now
    }
})

const Withdrawl = mongoose.model('Withdrawls',withdrawlModel)

module.exports = Withdrawl