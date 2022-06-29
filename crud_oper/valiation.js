const mongoose = require('mongoose')

const Schema = mongoose.schema({
    book: {
        type: String,
        required: true,
        minLength: 5,
        maxLength: 20,
        lowercase: true,
        uppercasae: true
    },
    author: {
        type: String,
        required: true,
        minLength: 5,
        maxLength: 20
    },
    type: {
        type: String,
        required: true,
        minLength: 5,
        maxLength: 20
    },
    isPublished: Boolean,
    price: {
        type: Number,
        required: function () { return this.isPublished },
        min: 10,
        max: 200,
        set: v => Math.round(v),
        get: v => Math.round(v)
    }
})