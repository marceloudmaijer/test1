const express = require('express');
const app = express();

var variationId = 0;


app.get('/', (req, res) => {
	res.sendFile( __dirname + "/" + "index.html" );
	//res.send('Variatie: ' + variationId);
	//res.end('Variatie2: ' + variationId);

	var variationId = req.query.varID;
	console.log( variationId );
	//console.log( res );
});

app.get('/bot', (req, res) => {
	variationId = req.query.vari;
	console.log(variationId);
	res.sendFile( __dirname + "/" + "bot.html" );
	
});


app.get('/process_get', function (req, res) {
   // Prepare output in JSON format
   response = {
      first_name:req.query.first_name,
      last_name:req.query.last_name
   };
   console.log(response);
   res.end(JSON.stringify(response));
})



const server = app.listen(7000, () => {
  console.log('Express running ? PORT 7000');
});