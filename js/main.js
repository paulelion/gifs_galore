// Search Button

function getGifs(){

	var input = $("#searchtext").val()

	var xhr = $.get("https://api.giphy.com/v1/gifs/search?q="+input+"&api_key=7aFQfk9FpPpZjgmPUyJ0PLb79Cej5iNw&limit=6");

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

// Random Button

function getRandomGifs(){

	var xhr = $.get("https://api.giphy.com/v1/gifs/random?&api_key=7aFQfk9FpPpZjgmPUyJ0PLb79Cej5iNw");

	xhr.done(function(response) { 
		console.log("success got data", response);

		var gifs = response.data
		$('.inner').prepend("<img src='"+gifs.image_url+"'/>")
	
	});

}

// Reset Button

function resetGifs(){

	$('.inner').empty();
	$('#searchtext').empty();

}

// Enter - keyboard

$(document).on('keydown keyup', function(e) {
    if (e.type == 'keydown') {   
        if (e.keyCode == 13) { 
            getGifs(); 
        }
    }

    console.log(e.keyCode);

});





