var key = require("./keys.js");
var fs = require("fs");
var request = require("request");
var action = process.argv[2];
var search = process.argv[3];

console.log();
console.log("Why Hello. Welcome to liri, but don't call me siri.  Enter the commands below to get what you are searching for.")
console.log();
console.log("my-tweets \ndo-what-it-says \nspotify-this-song <along with song name> \nmovie-this <along with movie name>");
console.log();

switch (action) {
  case "do-what-it-says":
    doWhatItSays();
    break;

   	case "movie-this":
   	moviethis();
   	break;

   case "my-tweets":
   	getTweets();
   	break;

   case "spotify-this-song":
   	spotifyThis();
   	break;

}

function doWhatItSays() {
	fs.readFile("random.txt", "utf8", function(error, data) {

 	// If the code experiences any errors it will log the error to the console.
  		if (error) {
    	return console.log(error);
  		}

  		// Then split it by commas (to make it more readable)
  		var dataArr = data.split(",");

  		// We will then re-display the content as an array for later use.
  		console.log(dataArr);

    });

}

function moviethis(){

	var movieName = process.argv[3];
	// Then run a request to the OMDB API with the movie specified
	var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";

// This line is just to help us debug against the actual URL.
console.log(queryUrl);

request(queryUrl, function(error, response, body) {

  // If the request is successful
  if (!error && response.statusCode === 200) {

  	var themovie = JSON.parse(body);

    // Parse the body of the site and recover just the imdbRating
    // (Note: The syntax below for parsing isn't obvious. Just spend a few moments dissecting it). * Title of the movie.
      /* * Year the movie came out.
       * IMDB Rating of the movie.
       * Rotten Tomatoes Rating of the movie. cannot get rotten tomatoe rating
       * Country where the movie was produced.
       * Language of the movie.
       * Plot of the movie.
       * Actors in the movie.*/
    console.log("Release Year: " + JSON.parse(body).Year);
    console.log("Title: " + JSON.parse(body).Title);
    console.log("Plot: " + JSON.parse(body).Plot);
    console.log("Actors: " + JSON.parse(body).Actors);
    console.log("Language: " + JSON.parse(body).Language);
    console.log("Country: " + JSON.parse(body).Country);
    console.log("IMDB Rating: " + JSON.parse(body).imdbRating);
    console.log("Rotten Tomatoes: " + JSON.parse(body).Ratings);



  }
});


}
// need to figure out spotify function in getting and parsing the data
function spotifyThis() {
	console.log("i'm currenlty not working at the moment");
}
//need to get the last 20 tweets.
function getTweets() {
	console.log("i'm out and about looking for my tweets comeback again soon");
}