import express from 'express';
const router = express.Router();
import passport from '../config/ppConfig';
import { IUser } from '../oauthtypes'

// GET /auth/github - display the GH login page
router.get('/github', passport.authenticate('github'));

// GET /auth/github/callback - recieves the token from github
router.get('/github/callback',
    passport.authenticate('github', {failureRedirect: '/auth/github'}),
    (req, res) => {
        // Successful authentication
        console.log(`THIS IS THE USER FROM THE DB: ${req.user}`)
        res.render('success', {user: req.user as IUser})
    })

export default router    