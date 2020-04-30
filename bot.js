// Create object reference to libs
var Twit = require('twit');
var fs = require('fs');


// Init Twit lib
const T = new Twit({
	consumer_key: process.env.TWITTER_CONSUMER_KEY,
	consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
	access_token: process.env.TWITTER_ACCESS_TOKEN,
	access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
	timeout_ms: 60*20000,
});


var sanFrancisco = [ '-61.2406815481',' -60.8538110362', '-31.4958172435', '-31.8235921027' ]
 
var stream = T.stream('statuses/filter', { locations: sanFrancisco })
 
stream.on('tweet', function (tweet) {
  console.log(tweet)
})

