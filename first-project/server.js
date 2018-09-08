const express = require('express');
const cors = require('cors');
const bodyPaser = require('body-parser');
const axios = require('axios');


require('dotenv').config();

const app = express();
app.use(bodyPaser.json());
app.use(cors());

let weather = "";
let newsobj = {};

const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`listening on port ${port}`)
});

app.get('/api/weather', (req, res, next) => {
    const city = req.query.inputCity;
    const apiKey = '156de3e62727130be6afca5f4c49d571';
    const units = 'imperial';

    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&APPID=${apiKey}`)
        .then((response) => {
            weather = response.data.main;
            console.log(weather)
            res.status(200).send(weather)
        }).catch(err => {
            res.status(500).send({ errorMessage: "failed to retrieve current temperature" });
            console.log(err)
        })
})


app.get('/api/news', (req, res, next) => {
    const newsapiKey = '2a16d2b9dc7445648d479c84c235c29d';
    const country = 'us';

    axios.get(`https://newsapi.org/v2/top-headlines?country=${country}&apikey=${newsapiKey}`)
        .then((response) => {
            console.log(response.data)
            newsobj = response.data;
            res.send(newsobj)
        })
})




