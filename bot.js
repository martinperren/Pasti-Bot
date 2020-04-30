// Create object reference to libs
var Twit = require('twit');
var fs = require('fs');

// Set Twitter API keys
var TWITTER_CONSUMER_KEY = '';
var TWITTER_CONSUMER_SECRET = '';
var TWITTER_ACCESS_TOKEN = '';
var TWITTER_ACCESS_TOKEN_SECRET = '';

// Database file
var DB_FILE = "bot_db.txt";

// Set interval time. Try to use a not so small interval to avoid Twitter to lock your account.
var INTERVAL = 3*60*60*1000; // 3 hours

// Set Twitter search phrase. You can use hash tags or simples text. Hash tags works better. Separate with OR or AND.
var TWITTER_SEARCH_PHRASE = '#AGoodHashTag OR #AnotherOne OR #MyGreatSearch';

// Set max number of tweets to get on the search results each time
var TWITTER_SEARCH_MAX_RESULTS = 20;

// Set tweets to reply
var TWEETS_TO_REPLY = [
	"Write something to reply.",
	"Bot will randomly pick one of the tweets to send.",
	"Try to be very natural and human like on the replies.",
	"Use the main Twitter handle you want to promote in all options. @MyHandle",
	"Create 5 to 10 replies. The more options the more natural bot will look."
];

// Init Twit lib
const T = new Twit({
	consumer_key: process.env.TWITTER_CONSUMER_KEY,
	consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
	access_token: process.env.TWITTER_ACCESS_TOKEN,
	access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
	timeout_ms: 60*20000,
});

// Retwittear Tweets que contenga el Hashtag #css
const stream = T.stream('statuses/filter', { track: '#css' });
 
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