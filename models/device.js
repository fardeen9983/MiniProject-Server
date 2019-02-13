const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

const {RoomSchema} = require('./room')

const DeviceSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    room : [RoomSchema]
})

DeviceSchema.plugin(uniqueValidator)

module.exports = mongoose.model('Device', DeviceSchema)