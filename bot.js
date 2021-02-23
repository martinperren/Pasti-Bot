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
rule.hour = 4;
rule.minute = 2;
rule.tz = 'America/Argentina/Buenos_Aires';


const job = schedule.scheduleJob(rule, function(){


	T.post('statuses/update', { status: "Toma la pastilla " + ybp.fancy()}, function(err, data, response) {
		console.log(data)
	  })
});



