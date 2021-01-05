const express = require('express');
const upload = require('../services/image-upload');
const singleUpload = upload('myImages').single('image');


const router = express.Router();

router.get('/', (req, res) => {
    res.render('index');
})

router.post('/upload', (req, res) => {
    singleUpload(req, res, (err) => {
        if (err) {
            res.send('An Error Occurred');
        }else {
            if (req.file) {
                const imageURL = req.file.location;
                res.render('show-image', {imageURL: imageURL});
            }else {
                res.render('error');
            }
        }
    })
})

module.exports = router;