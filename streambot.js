//require twit library
var Twit = require('twit'),
	config = require('./config'),
	readCSV = require('nodecsv').readCSV,
	writeCSV = require('nodecsv').writeCSV,
	appendCSV = require('nodecsv').appendCSV,
	moment = require('moment'),
	T = new Twit(config);
// search for the following
var query = {
  //follow: '263809798'// @trafico_zmg twitter ID's => 263809798
  // follow: '236640161' //ID for testing @regenhans
  track: ' localizar, busco a, no encuentro a, #sebusca, #SEBUSCA'
  // (you can find the id of a twitter account here : https://tweeterid.com/)
}


function isReply(tweet) {
  if ( tweet.retweeted_status
    || tweet.in_reply_to_status_id
    || tweet.in_reply_to_status_id_str
    || tweet.in_reply_to_user_id
    || tweet.in_reply_to_user_id_str
    || tweet.in_reply_to_screen_name )
    return true
}
// init stream
var stream = T.stream('statuses/filter', query)
//var stream = T.stream('user')
//var stream = T.stream('statuses/sample')

//The keywords I'm going to look for on the tweets from this user
//var keywords = ['bici','bicicleta' ,' ciclista', 'ciclo estación']
//testing keywords
//var keywords = ['hola', 'hello', 'mono']

//show me tweets every time the user creates a tweet with one of the keywords

var filteredTweet;

moment.locale('es');

stream.on('tweet', function (tweet) {
//   for (var i = 0; i < keywords.length; i++) {
//       if(tweet.text.indexOf(keywords[i]) != -1){
//         var filteredTweet = tweet.text;
//         console.log(filteredTweet);
//
//         break; //end loop if  at least one word match
//       }
// }
	// var tweeText = tweet.text ,
	// 	createdAt = moment(tweet.created_at).format('MMMM Do YYYY, h:mm:ss a'),
	// 	user = tweet.user.screen_name;
	//
	// var datacsv = [[createdAt, user, tweeText]];
	//
	//
	//
	// appendCSV(datacsv, './csv/tweets.csv', function(error){
	//     if (!error) {
	//       console.log('agregado a lista de reportes');
	//     }
	//     else {
	//       console.log('algo salió mal al intentar agregar a tweets.csv');
	//     }
	// });
	//
	// console.log(tweeText)


	var username = ' @' + user,
		reportId = Math.floor(Math.random()*(1000-1)),
		status = {
			status: username + ' ,puedes usar esta herramienta de google para buscar personas por el sismo de la cdmx http://google.org/personfinder/2017-puebla-mexico-earthquake?gl=es&hl=es&lang=es'
		}



if (!isReply(tweet)) {
		var tweeText = tweet.text ,
			createdAt = moment(tweet.created_at).format('MMMM Do YYYY, h:mm:ss a'),
			user = tweet.user.screen_name;

		var datacsv = [[createdAt, user, tweeText]];



		appendCSV(datacsv, './csv/tweets-21-sep.csv', function(error){
		    if (!error) {
		      console.log('agregado a lista de reportes');
		    }
		    else {
		      console.log('algo salió mal al intentar agregar a tweets.csv');
		    }
		});

		console.log(tweeText)
	// T.post('statuses/update', status, function(err, data, response) {
	// 	if(!err){
	// 		console.log('tweet enviado');
	// 	}
	// 	else{
	// 		console.log('algo salió mal al enviar el tweet:' + err);
	// 	}
	// })

}






});
