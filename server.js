var express = require('express');
var app = express();


var cors = require('cors');
app.use(cors({optionSuccessStatus: 200}));  


app.use(express.static('public'));


app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});

app.get("/api/:id", function (req, res) {
  const h = req.headers;
  res.json({
    ipaddress: req.ip,language: h['accept-language'], software: h['user-agent']
  });

});

// listen for requests :)
var listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
