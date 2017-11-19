var express = require('express')
var app = express()

// Build Your Route Here
app.get('/', function(req, resp){
  res.send('Hello World!!')
})

module.exports = app
