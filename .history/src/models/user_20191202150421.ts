import mongoose, { Schema } from 'mongoose';

const userSchema = new Schema({
    githubId: {
        type: Number,
        required: [true, ]
    }
})