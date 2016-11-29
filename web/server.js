// A Small Orange hosting uses Node 0.10.0
/* eslint-disable no-var, prefer-arrow-callback, no-console */

var express = require('express')
var path = require('path')

var app = express()

app.use('/assets', express.static(path.resolve(__dirname, 'assets')))
app.get('/apple-app-site-association', function (req, res) {
  res.set('Content-Type', 'application/json')
  res.sendFile(path.resolve(__dirname, 'assets/apple-app-site-association'))
})
app.get('*', function (req, res) {
  res.sendFile(path.resolve(__dirname, 'index.html'))
})

app.listen(3000, function () {
  console.log('I gotchoo bae. Listening on 3000')
})
