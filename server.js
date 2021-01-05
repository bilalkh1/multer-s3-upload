const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const imageUpload = require('./src/routes/upload');
const path = require('path');

const app = express();

// Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));


// Load Config 
dotenv.config({ path: './config/config.env' });

// Setup Routes
app.use('/', imageUpload);


// Setup view engine
app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, 'src/views'));


// Start the server
app.listen(3000, err => {
    if (err) {
        console.error('Error ', err)
    }
    else{
        console.log('Started on port 3000')
    } 
})