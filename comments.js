// create simple webserver for comment
// Import module
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
const port = 3000;

// Use body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Read file
const readData = () => {
    const data = fs.readFileSync('data.json');
    return JSON.parse(data);
}

// Write file
const writeData = (data) => {
    fs.writeFileSync('data.json', JSON.stringify(data));
}

// Get all comments
app.get('/comments', (req, res) => {
    const data = readData();
    res.send(data);
});

// Get comment by id
app.get('/comments/:id', (req, res) => {
    const data = readData();
    const comment = data.find(item => item.id === parseInt(req.params.id));
    res.send(comment);
});


