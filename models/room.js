const mongoose = require('mongoose')

const RoomSchema = new mongoose.Schema({
    alias: {
        type: String,
        required: true
    },
    schedule: {
        mon: [],
        tue: [],
        wed: [],
        thu: [],
        fri: [],
        sat: [],
        sun: []
    },

    status: {
        presence: Boolean,
        current: Number,
        inUse: Boolean,
        switch: Boolean
    },
    history: {
        _: {
            wattage: Number
        },
        month: [{
            index: Number,
            wattage: Number,

        }]
    }

})

var RoomModel = mongoose.model("Room", RoomSchema)
module.exports = {
    RoomSchema, RoomModel
}