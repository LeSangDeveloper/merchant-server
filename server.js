const express = require('express')
const app = express();

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

app.get('/test', (req, res) => {
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

app.listen(8080, () => {
  console.log('Example app listening on port 8080!')
});