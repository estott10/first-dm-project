const express = require('express');
const cors = require('cors');
const bodyPaser = require('body-parser');
const axios = require('axios');

require('dotenv').config();

const app= express();
let weatherconditions= {};
let apiKey= '156de3e62727130be6afca5f4c49d571';

app.use(bodyPaser.json());
app.use(cors());

const port = process.env.PORT || 8000;

app.get('/api/forecast', (req, res, next)=> {
    axios.get(`http://api.openweathermap.org/data/2.5/forecast?id=5391997&APPID=${apiKey}`).then( (response) =>{
        weatherconditions= response.data;
        res.send(weatherconditions)

        })
    })

app.listen( port, ()=> {
    console.log(`listening on port ${port}`)
})

