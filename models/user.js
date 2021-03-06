const mongoose = require("mongoose")
const bcrypt = require('bcryptjs')
const uniqueValidator = require('mongoose-unique-validator')

const { RoomSchema } = require('./room')

const UserSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
            trim: true,
            unique: true
        },
        name: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            unique: true,
            required: true,
            minLength: 8
        },
        device: {
            type: [String]
        },
        block: {
            type: [{
                id: String,
                room: [RoomSchema]
            }]
        },
        phone: {
            type: String,
            required: true,
            unique: true
        }
    })
UserSchema.plugin(uniqueValidator)

module.exports = mongoose.model('User', UserSchema)