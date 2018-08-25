const express = require('express');
const cors = require('cors');
const bodyPaser = require('body-parser');
const axios = require('axios');


require('dotenv').config();

const app= express();
app.use(bodyPaser.json());
app.use(cors());

const port = process.env.PORT || 8000;

app.get('https://api.openweathermap.org/data/2.5/weather', (req, res, next)=> {

    res.send(req.query.weather)
        })

app.get('https://newsapi.org/v2/top-headlines', (req, res, next)=> {
        debugger
    res.send(req.query.news)
        })

app.post('/api/bigform', (req, res, next)=> {
    debugger
    res.send(req.body)
        })


app.listen( port, ()=> {
    console.log(`listening on port ${port}`)
})

