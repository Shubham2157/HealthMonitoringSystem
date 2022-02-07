const express = require('express');
const logger = require('./logger');
const data = require('./static/data.json')
const homeData = require('./static/homedata.json')
const app = express()
const PORT = process.env.PORT || 5000;


app.use("/logs-file", express.static("logs-file"))
app.use("/logsfile", express.static("logs"))


// Home Route
app.get('/', (req, res) => {
    console.log();
    logger.info(`Visited Route ${req.url}`)
    res.json(homeData)
})

// Authentiction Routes

app.get('/login', (req, res) => {
    res.json({
        status: '200',
        message: 'ok'
    })
})


// API Routes

// Read data from all fields in channel with HTTP GET
app.get('/api/v1', (req, res) => {
    logger.info(`Visited Route ${req.url}`)
    res.json(data)
})

// Read data from single field of channel with HTTP GET

// Read status field of channel with HTTP GET

// Read last entry in channel with HTTP GET

// Read last entry in channel field with HTTP GET

// 	Read last status of channel with HTTP GET

app.listen(PORT, () =>{
    logger.info(`Server Started on PORT ${PORT}`);
})