// A Small Orange hosting uses Node 0.10.0
/* eslint-disable no-var, prefer-arrow-callback, no-console */

var express = require('express')
var path = require('path')

var app = express()

app.use('/', express.static(path.resolve(__dirname, 'build')))
app.get('*', function (req, res) {
  res.sendFile(path.resolve(__dirname, 'build/index.html'))
})

app.listen(3000, function () {
  console.log('Listening on 3000')
})
