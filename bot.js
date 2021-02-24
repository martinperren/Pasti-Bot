// Create object reference to libs
var Twit = require("twit");
var fs = require("fs");
const schedule = require("node-schedule");



console.log("Bot iniciado");


const T = new Twit({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token: process.env.TWITTER_ACCESS_TOKEN,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
});

const rule = new schedule.RecurrenceRule();
rule.hour = 23;
rule.minutes = 0;

rule.tz = "America/Argentina/Buenos_Aires";

let jsonData = require("./localidades.json");



const job = schedule.scheduleJob(rule, function () {
	var localidad = jsonData.localidades[Math.floor(Math.random() * 3526)].municipio.nombre;
  T.post(
    "statuses/update",
    { status: "💊 LA PASTILLA 💊 "+ localidad.toUpperCase() },
    function (err, data, response) {
      console.log("Twitteado");
    }
  );
});
