const mongoose = require('mongoose')

const event = new mongoose.Schema(
    {
        name:{
            type: String
        },
        description:{
            type: String
        },
        date:{
            type: String
        },
        time:{
            type: String
        },
        category:{
            type: String
        },
        reminder: {
            type: Boolean
        }
    }
)

const Event = mongoose.model('Event',event)
module.exports = Event