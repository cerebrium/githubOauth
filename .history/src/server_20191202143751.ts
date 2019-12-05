// TS requires ES6 style imports
import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import session from 'session';
import mongoose from 'mongoose';
import passport from './config/ppConfig';

const app = express();

// only needed for heroku deployment
// app.use(express.static(__dirname + '/../client/build/'))
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.listen(process.env.PORT)