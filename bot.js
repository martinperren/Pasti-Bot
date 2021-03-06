
var Twit = require("twit");
var fs = require("fs");
var cron = require('node-cron');
//const dotenv = require('dotenv');
//dotenv.config({ path: './config.env' });


console.log("Bot iniciado");


const T = new Twit({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token: process.env.TWITTER_ACCESS_TOKEN,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
});


let jsonData = require("./localidades.json");

 cron.schedule('0 23 * * *', () => {

	var localidad = jsonData.localidades[Math.floor(Math.random() * 3526)];
 while(localidad=="null"){

localidad = jsonData.localidades[Math.floor(Math.random() * 3526)];
} 

var nombreLocalidad = localidad.municipio.nombre;
  var localidadProvincia = localidad.provincia.nombre;
 




  console.log("LA PASTILLA 💊 "+ nombreLocalidad + " ("+localidadProvincia+")");
  
  
  T.post(
    "statuses/update",
    { status: "LA PASTILLA 💊 "+ nombreLocalidad + " ("+localidadProvincia+")"},
    function (err, data, response) {
      console.log("Twitteado");
    }
  );


 }, {
   scheduled: true,
   timezone: "America/Argentina/Buenos_Aires"
 });






