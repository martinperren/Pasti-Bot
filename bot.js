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

// Retwittear Tweets que contenga el Hashtag #css
const stream = T.stream('statuses/filter', { track: '@Protomolecula' });
 
// Registro errores en las solicitudes
function responseCallback(err, data, response) {
  console.log(err);
}
 
// Tareas
stream.on('tweet', tweet => {
  // Retweet
  T.post('statuses/retweet/:id', { id: tweet.id_str }, responseCallback);
  // Me Gusta
  T.post('favorites/create', { id: tweet.id_str }, responseCallback);
});