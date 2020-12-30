const express = require('express')
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const logger = require("morgan");
const db = require("./dummydb.js")

const port = 5000;

app.use(logger('dev'));
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(port, () => {
    console.log("Listening on " + port);
});

// simple post request to add to the 'db'
var postnum = 0
app.post('/counter', (req, res) => {
    db[postnum] = req.body.counterVal;
    postnum++;
    console.log(db)
    res.send(`Thomas has ${req.body.counterVal} vagina(s).`);
})

module.exports = app;