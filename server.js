var express = require('express');

//Create our app
var app = express();
const PORT = process.env.PORT || 3000;

// req(requistion) = requisiition the in file
// res(responsive) = responsive what send back
// next = when the piece of middleware is done (function)
app.use(function(req, res, next) {
  if (req.headers['x-forwarded-proto'] === 'https') {
    res.redirect('http://' + req.hostname + req.url);
  } else {
    next();
  }
});

app.use(express.static('public'));


app.listen(PORT, function(){
  console.log('Express server is up on port ' + PORT);
});
