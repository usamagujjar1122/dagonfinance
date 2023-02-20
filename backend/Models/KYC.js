const mongoose = require('mongoose')

const KYCModel = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users",
        require: true,
      },
    pic : {
        type: String,
        require:true,
    },
    name : {
        type: String,
        require:true,
    },
    username : {
        type: String,
        require:true,
    },
    email : {
        type: String,
        require:true,
    },
    image : {
        type: String,
        require:true,
    },
    catagory : {
        type: String,
        require:true,
    },
    status : {
        type: String,
    },
    createdat:{
        type:Date,
        default:Date.now()
    }
})

const KYC = mongoose.model('KYC',KYCModel)

module.exports = KYC