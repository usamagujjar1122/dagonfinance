const mongoose = require('mongoose')

const statModel = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users",
        require: true,
      },
    actived : {
        type: Number,
    },
    lastd : {
        type: Number,
    },
    totald : {
        type: Number,
    },
    pendingw : {
        type: Number,
    },
    lastw : {
        type: Number,
    },
    totalw : {
        type: Number,
    },
    earned : {
        type: Number,
    },
    commision : {
        type: Number,
    },
    
})

const Stat = mongoose.model('Stats',statModel)

module.exports = Stat