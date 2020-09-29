const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

// BodyParser Middleware
app.use(bodyParser.json);

// DB config
const db = require('./config/keys.js').mongoURI;

// Connect to Mongo
mongoose.connect(db)
    .then(() => console.log('Mongo Connected...'))
    .catch(err => console.log(err));