const express = require('express')
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const logger = require("morgan");
const fs = require('fs');

const port = 5000;
const dbPath = 'database.json';

// returns the updated db as a json object
const updatedb = (count) => {
    let rawdata = fs.readFileSync(dbPath);
    let data = JSON.parse(rawdata);
    data["current"]++;
    data["entry"].push(data["current"]);
    data["count"].push(count);
    let newdata = JSON.stringify(data, null, 2);
    fs.writeFile(dbPath, newdata, (err) => {
        if (err) throw err;
    });
    return data;
}

// returns an empty json object of this db
const cleardatabase = () => {
    let data = {
        "current" : 0,
        "entry" : [],
        "count" : []
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
app.post('/counter', (req, res) => {
    let data = updatedb(req.body.counterVal)
    console.log(data);
    res.send(`Thomas has ${req.body.counterVal} vagina(s).`);
})

// clears db
app.get('/clear', (req, res) => {
    let data = cleardatabase();
    console.log(data);
    res.send('database has been cleared.')
})

module.exports = app;