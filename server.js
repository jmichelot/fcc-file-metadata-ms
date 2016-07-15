var express = require('express');
var morgan = require('morgan'); // logger
var multer  = require('multer'); // multipart/form-data middleware
var upload = multer({ dest: 'uploads/' });
var app = express();
var port = process.env.PORT || 3000;


// middleware logger
app.use(morgan('short'));

app.use('/', express.static(process.cwd() + '/public'));

app.post('/', upload.single('myfile'), function (req, res, next) {
  // myfile needs to match the html field input name
  res.json({'size': req.file.size});
})

app.listen(port, function () {
  console.log('Node.js listening on port ' + port + '...');
});

