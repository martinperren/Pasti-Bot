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


var sanFrancisco = [ '-61.240682',	'-31.823592'	,'-60.853811'	,'-31.495817']
 
var stream = T.stream('statuses/filter', { locations: sanFrancisco })
 
stream.on('tweet', function (tweet) {
  if(tweet.user.location!=null)
  console.log(tweet.place.fullname)
})

