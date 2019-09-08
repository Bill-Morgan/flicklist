

var api = {
	root: "https://api.themoviedb.org/3",
	token: "72988f80343624797d5887d6dd5330c2", // TODO put your api key here
    tag: "jackson+5"
}

/**
 * Makes an AJAX request to themoviedb.org, asking for some movies
 * if successful, prints the results to the console
 */
function testTheAPI() {
	$.ajax({
		url: api.root + "/discover/movie",
		data: {
			api_key: api.token,
            tag: api.tag
		},
		success: function(response) {
			console.log("We got a response from The Movie DB!");
			console.log(response);
		}
	});
}


console.log("The script loaded!");
testTheAPI();
