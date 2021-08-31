const express = require('express')
const path = require('path')
// include and initialize the rollbar library with your access token
const Rollbar = require("rollbar");

let rollbar = new Rollbar({
  accessToken: 'ba8dbab8532b4ea2bc99d4800c27f63a',
  captureUncaught: true,
  captureUnhandledRejections: true
});

// record a generic message and send it to Rollbar
rollbar.log("Hello world!");


//  const app = express()
// endpoing
app.get('/',function(req,res) {
  res.sendFile(path.join(__dirname, '../index.html'));
});

app.use("/css", express.static(path.join(__dirname, "../client/index.css")));

const port = process.env.PORT || 4005

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})