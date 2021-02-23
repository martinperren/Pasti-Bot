// Create object reference to libs
var Twit = require('twit');
var fs = require('fs');
const schedule = require('node-schedule');

console.log("Bot iniciado");
// Init Twit lib

const T = new Twit({
	consumer_key: process.env.TWITTER_CONSUMER_KEY,
	consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
	access_token: process.env.TWITTER_ACCESS_TOKEN,
	access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
});


const rule = new schedule.RecurrenceRule();
const ybp = require('year-progress-bar');
rule.hour = 23;


rule.tz = 'America/Argentina/Buenos_Aires';

let jsonData = require('./localidades.json');

var localidad = jsonData[getRandomArbitrary].municipio.nombre;
console.log(localidad);
const job = schedule.scheduleJob(rule, function(){


	function getRandomArbitrary(min, max) {
		return Math.random() * (max - min) + min;
	  }




	T.post('statuses/update', { status: "TOMA LA PASTILLA" + ybp.current() +"%"}, function(err, data, response) {


		
		console.log(data)
	  })
});



