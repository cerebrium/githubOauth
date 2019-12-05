import mongoose, { Schema } from 'mongoose';

const userSchema = new Schema({
    githubId: {
        type: Number,
        required: [true, 'You need to have a github id']
    }
});

userSchema.set('toObject', {
    transform: function()
})