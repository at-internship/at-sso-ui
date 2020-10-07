'use strict'


const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    pwd: {
        type: String,
        required: true
    },
    status: {
        type: Number,
        required: true
    }
},
    {
        timestamps: true
    });

    UserSchema.methods.encrypPassword = async pwd => {
        const salt = await bcrypt.genSalt(10);
        return await bcrypt.hash(pwd, salt);
    };

    UserSchema.methods.matchPassword = async function(pwd) {
        return await bcrypt.compare(pwd, this.pwd)
    }

    module.exports = model('User', UserSchema);