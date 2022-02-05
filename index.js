const express = require('express');
const data = require('./static/data.json')
const homeData = require('./static/homedata.json')
const app = express()
const PORT = process.env.PORT || 5000;

// Home Route
app.get('/', (req, res) => {
    res.json(homeData)
})

// Authentiction Routes


// API Routes

// Read data from all fields in channel with HTTP GET
app.get('/api/v1', (req, res) => {
    res.json(data)
})

// Read data from single field of channel with HTTP GET

// Read status field of channel with HTTP GET

// Read last entry in channel with HTTP GET

// Read last entry in channel field with HTTP GET

// 	Read last status of channel with HTTP GET

app.listen(PORT, () =>{
    console.log(`Server Started on PORT ${PORT}`);
})