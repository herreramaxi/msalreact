const cors = require('cors');
const express = require('express')
const app = express()
const path = require('path');
const db = require('./database/models/index');
const TemperatureSample = db.TemperatureSample;

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

if (process.env.NODE_ENV !== 'production') {
    app.use(cors());
}

// Serve static files
app.use(express.static(path.join(__dirname, 'build')));
app.use(express.static(path.join(__dirname, 'public')));
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});


app.get('/hello', (req, res) => {
    res.send("hello world!")
});

app.get('/getTemperatureSamples', (req, res) => {

    TemperatureSample.findAll({}).then(r => {
        res.send(r);
    })
        .catch(e => {
            res.send(e);
        });

});

app.post("/api/temperature", (req, res) => {
    if (!req.body.temperature)
        return res.status(400).send({ message: "Mandatory fields not provided: [temperature]" });

    try {

        TemperatureSample.create({ value: req.body.temperature, sampleDate: new Date() })
            .then(r => {
                res.send(r);
            });
    } catch (error) {
        res.status(500).send({ message: "Error when trying to save a temperature sample. " + error })
    }
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 3001);