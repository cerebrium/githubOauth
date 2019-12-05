// TS requires ES6 style imports
import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import session from 'express-session';
import mongoose from 'mongoose';
import passport from './config/ppConfig';

const app = express();

// only needed for heroku deployment
app.use(express.static(__dirname + '/../client/build/'))
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.set('view engine', 'ejs');

// Mongoose connection string wants to be typed
mongoose.connect(process.env.MONGODB_URI as string)
const db = mongoose.connection;
db.once('open', function() {
    console.log('connected to mongoDB Server')
});
db.on('error', function(err) {
    console.log('There is an error: ', err)
})

// Configre session - must be before passport
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true
}));

// Include passport - session must be configured first
app.use(passport.initialize());
app.use(passport.session())


import authRouter from './routes/auth';
app.use('/auth', authRouter)

import apiRouter from './routes/api';
app.use('/api', apiRouter)

app.get('*', (req, res) => {
    res.sendFile(__dirname + "/../client/build/index.html")
})

app.listen(process.env.PORT, () => {
    console.log('connected and listening to port: ', process.env.PORT)
})