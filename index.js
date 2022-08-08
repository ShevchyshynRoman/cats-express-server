const express = require('express');
const cors = require('cors');
const apiRoute = require('./routes/api');

const app = express();
app.use(cors());
app.use('/public/images', express.static(__dirname + '/public/images/'));

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.use('/api', apiRoute);

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
