const express = require('express')
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const logger = require("morgan");
const fs = require('fs');

const port = 5000;
const dbPath = 'database.json';

// returns the updated db as a json object
const updatedb = (data) => {
    let newdata = JSON.stringify(data, null, 2);
    fs.writeFile(dbPath, newdata, (err) => {
        if (err) throw err;
    });
    return newdata;
}

// returns an empty json object of this db
const cleardatabase = () => {
    let data = {
        users: []
    };
    let rawdata = JSON.stringify(data, null, 2);
    fs.writeFile(dbPath, rawdata, (err) => {
        if (err) throw err;
        console.log('database cleared successfully')
    });
    return data;
}

app.use(logger('dev'));
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(port, () => {
    console.log("Listening on " + port);
});

// simple post request to add to the 'db'
app.post('/update', (req, res) => {
    let data = updatedb(req.body)
    console.log(data);
    res.send(`received data`);
})

// simple delete request
app.delete('/clear', (req, res) => {
    let data = cleardatabase();
    console.log(data);
    res.send('database has been cleared.')
})

module.exports = app;