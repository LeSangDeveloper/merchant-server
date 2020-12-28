const express = require('express')
var http = require('http');
var https = require('https')
var fs = require('fs');

var privateKey = fs.readFileSync('cert.pem');
var certificate = fs.readFileSync('key.pem');

var credentials = {key: privateKey, cert: certificate};

var app = express();

app.get('/', (req, res) => {
const request = require('request');
  request('http://www.google.com', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body) // Show the HTML for the Google homepage. 
    res.send(body)
  }
  else
    res.send('Hello World!')
  });
});

app.get('/test/add', (req, res) => {
  const request = require('request');
    request('http://localhost:8000/api/test/add', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      console.log(body) // Show the HTML for the Google homepage. 
      res.send(body)
    }
    else
      res.send('Hello World!')
    });
  });

app.get('/test/append', (req, res) => {
  const request = require('request');
  request('http://localhost:8000/api/test/append', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body) // Show the HTML for the Google homepage. 
    res.send(body)
  }
  else
    res.send('Hello World!')
  });
});

app.get('/test/read', (req, res) => {
  const request = require('request');
    request('http://localhost:8000/api/test/read', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      console.log(body) // Show the HTML for the Google homepage. 
      res.send(body)
    }
    else
      res.send('Hello World!')
    });
  })

app.get('/confirm', (req, res) => {
  console.log(req)
})

https.createServer({
  key: fs.readFileSync('server.key'),
  cert: fs.readFileSync('server.cert')
}, app)
.listen(8080, function () {
    console.log('Example app listening on port 8080! Go to https://localhost:8080/')
})