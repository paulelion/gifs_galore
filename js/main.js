
function getGifs(){

	var input = $("#searchtext").val()

	var xhr = $.get("http://api.giphy.com/v1/gifs/search?q="+input+"&api_key=7aFQfk9FpPpZjgmPUyJ0PLb79Cej5iNw&limit=16");

	xhr.done(function(response) { 
		console.log("success got data", response);

		var gifs = response.data

		for (i in gifs) 
		{
		$('.inner').prepend("<img src='"+gifs[i].images.original.url+"'/>")
		}

	var input = document.getElementById("searchtext").value = ""

	});

}


function getRandomGifs(){

	$('.inner').empty();

	var xhr = $.get("http://api.giphy.com/v1/gifs/random?&api_key=7aFQfk9FpPpZjgmPUyJ0PLb79Cej5iNw");

	xhr.done(function(response) { 
		console.log("success got data", response);

		var gifs = response.data
		$('.inner').append("<img src='"+gifs.image_url+"'/>")
	
	});

}


function resetGifs(){
	$('.inner').empty();
	$('#searchtext').empty();
}


