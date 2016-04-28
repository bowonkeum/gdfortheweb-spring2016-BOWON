/*
Flickr
url: https://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}.jpg
key: 30cfef3f3752b0b4dcdb0cd6fb9f7bea
secret: 6b3ee47fc60b1322

URL for JSON and text
https://api.flickr.com/services/rest/
?method=flickr.photos.search&api_key=
c7f05f525bd700aff6b4a17290941d3c
&text=haze
&format=json
&nojsoncallback=1
*/

//Flickr search for image using weatherDescr
function getFlickrData(inputObject) {
	var flickrURL = "https://api.flickr.com/services/rest/" 
					+ "?method=flickr.photos.search&api_key="
					+ "30cfef3f3752b0b4dcdb0cd6fb9f7bea" 
					+ "&text=" + inputObject
					+ "&sort=" + "relevance" //documentation, we want them to sort
					+ "&format=json" + "&nojsoncallback=1";

	//console.log(flickrURL);

	//AJAX
	$.ajax({
		url: flickrURL,
		type: "GET",
		dataType: "json",
		error: function(data) {
			console.log("ERROR from Flickr");
		},
		success: function(data) {
			//console.log(data);

				var imgObj = data.photos.photo[0];
				var imgURL = "https://farm" + imgObj.farm + ".staticflickr.com/" + imgObj.server + "/" + imgObj.id + "_" + imgObj.secret + ".jpg"
				console.log(imgURL);

			$(".object-output").css("background-image", "url(" + imgURL + ")" );
		}
	});
}

$(document).ready(function() {
	console.log("Ready!");

	// $("input").keypress(function(e) {
	// //instead of button, we're going to use e (enter)
	// if (e.which == 13) {
	// 	var inputObject = $("#input-object").val();
	// 	getFlickrData(inputObject);
	// 	}
	// })

	$("button").click(function() {
	//instead of button, we're going to use e (enter)
		var inputObject = $("#input-object").val();
		getFlickrData(inputObject);

		$("body").append("<div class='page'><div class='object-output'>" + "</div></div>");

		window.print();

		
		// $(".words").append(inputObject + " ");
	})
});

