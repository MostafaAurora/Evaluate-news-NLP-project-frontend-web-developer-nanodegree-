const dotenv = require('dotenv');
dotenv.config();
var path = require('path')
const express = require('express')
const api_key = process.env.AK
console.log(`Your API Key is ${process.env.AK}`)
const meaningCloud =  'https://api.meaningcloud.com/sentiment-2.1?'
const fetch = require("node-fetch");
const bodyParser = require("body-parser");
cors = require ('cors');

const app = express()

app.use(express.static('dist'))
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


console.log(__dirname)

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(9000, function () {
    console.log('Example app listening on port 9000!')
})

app.post("/API", async function(req,res){
    const url = req.body.url1
    console.log(url)
    const response = await fetch(`${meaningCloud}key=${api_key}&url=${url}&lang=en`)
    try{
    analysis = await response.json()
    }
    catch(error) {
        console.log("error 2  ",error)
    }
    res.send(analysis)
})