const mongoose = require('mongoose');

const user = new mongoose.Schema(
    {
        eventId:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Event'
        }
        ,name: {
            type: String
        },
        email: {
            type: String
        },
        password:{
            type: String
        }
    }
)

const User = mongoose.model('User', user);
module.exports = User;