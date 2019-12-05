import dotenv from 'dotenv';
dotenv.configure();
import passport from 'passport';
import passportGithub2 from 'passport-github2';

const githubStrategy = passportGithub2.Strategy;
import User from '../models/user';

passport.use(new githubStrategy({
    clientID: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET
}))

