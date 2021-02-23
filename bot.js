// Create object reference to libs
var Twit = require('twit');
var fs = require('fs');
const schedule = require('node-schedule');

console.log("ASD");
// Init Twit lib

const T = new Twit({
	consumer_key: process.env.TWITTER_CONSUMER_KEY,
	consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
	access_token: process.env.TWITTER_ACCESS_TOKEN,
	access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
});


const rule = new schedule.RecurrenceRule();
rule.hour = 3;
rule.minute = 35;
rule.tz = 'America/Argentina/Buenos_Aires';


const job = schedule.scheduleJob(rule, function(){
	console.log("ASD");
	T.post('statuses/update', { status: 'Toma la pastilla' }, function(err, data, response) {
		console.log(data)
	  })
});



