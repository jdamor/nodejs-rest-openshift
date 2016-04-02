const express      = require('express'),
      env          = process.env;

let app = express();
//app.use('/', express.static(__dirname + '/static'));

app.get('/health', function (req, res) {
   res.sendStatus(200);     
});
app.get('/asciimo', function(req, res) {
   var link = "http://i.imgur.com/kmbjB.png";
   res.send("<html><body><img src='" + link + "'></body></html>");    
});

app.listen(env.NODE_PORT || 3000, env.NODE_IP || 'localhost', function () {
  console.log(`Application worker ${process.pid} started...`);
});


