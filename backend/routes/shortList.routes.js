const userModel = require('../model/User.model');
const { authentication } = require('./user.auth');
const router = require('express').Router();


//add statement to shortlist
router.put('/ShortList', authentication, async (req, res) => {
    try {
           const {id} = req.headers;
           const {sid} = req.headers;

           const userData = await userModel.findById(id);

           const isShortlisted = userData.shortList.includes(sid);
           
           if (isShortlisted) {
            return res.status(400).json({ message: 'Statement is already shortlisted' });
           }

           userData.shortList.push(sid);
           
           await userData.save();
           
           res.status(200).json({ message: 'Statement added to shortlist successfully' });
           
           
    } catch (error) {
        res.status(500).json({ message: 'Error updating liked status', error: error.message });
    }
});

//remove statement from shortlist
router.delete('/remove', authentication, async (req, res) => {
    try {
           const {id} = req.headers;
           const {sid} = req.headers;

           const userData = await userModel.findById(id);

           const isShortlisted = userData.shortList.includes(sid);
           
           if (!isShortlisted) {
            return res.status(400).json({ message: 'Statement is not shortlisted' });
           }

           userData.shortList.pull(sid);
           
           await userData.save();
           
           res.status(200).json({ message: 'Statement removed from shortlist successfully' });
           
           
    } catch (error) {
        res.status(500).json({ message: 'Error updating liked status', error: error.message });
    }
});


//geting shortlisted data

router.get('/get-shortlist', authentication, async (req, res) => {
    try {
        const {id} = req.headers;
        const userData = await userModel.findById(id).populate('shortList');  //populate fetch all data from related documents

        const shortList = userData.shortList
        res.status(200).json(shortList);


    } catch (error) {
        res.status(500).json({ message: 'Error getting shortlisted statements', error: error.message });
    }
});

module.exports = router;
