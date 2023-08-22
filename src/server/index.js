var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
var bodyParser = require('body-parser')
var cors = require('cors')

const MeaningCloud = require('meaning-cloud');

const dotenv = require('dotenv');
dotenv.config();

const app = express()
app.use(cors())
// to use json
app.use(bodyParser.json())
// to use url encoded values
app.use(bodyParser.urlencoded({
    extended: true
}))

app.use(express.static('dist'))

console.log(JSON.stringify(mockAPIResponse))

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
});

app.get('/test', function (req, res) {
    res.json(mockAPIResponse);
});


app.post('/evaluate', async (req, res) =>{
    const article = req.body;
    api_key: process.env.API_KEY;
    const api_url = `https://api.meaningcloud.com/sentiment-2.1?key=${apiKey}&lang=en&txt=${encodeURIComponent(article)}`;

    try{
        const response = await fetch(api_url);
        const data = await response.json();
        console.log(data);
        
        res.json(data); // Send the response back to the client
    }catch(err){
        console.error('NLP Error:', err);
    }
});

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

