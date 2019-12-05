import express from 'express';
const router = express.Router();
import axios from 'axios';
import { IUser } from '../oauthtypes'

// GET /api/:id/repos - gets the user's repos from gh
router.get('/:id/repos', (req, res) => {
    let ghUser = req.user as IUser
    let config = {
        headers: {
            'Authorization': `Bearer ${ghUser.accessToken}`,
            'User-Agent': 'nms_oauth_boiler'
        }
    }
    axios.get('https://api.github.com/user/repos', config)
    .then((response) => {
        res.json(response.data);
    }).catch((err) => {
        console.log(err)
    })
})

export default router;