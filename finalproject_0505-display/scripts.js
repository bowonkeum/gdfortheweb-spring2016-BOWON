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

//viewport dimensions
var vWidth = $(window).width();
var vHeight = $(window).height();

//random integer position
var PosX = getRandomInt(0, vWidth-800);
var PosY = getRandomInt(0, vHeight-500);

//generate random integer
function getRandomInt(min, max) {
	return Math.floor((Math.random() * (max - min)) + min);
}

//counters
var count = 0;
var j = 0;
var i = 1;

function receivedImage(url) {
	console.log(url);

	$(".object-output").css("background-image", "url(" + url + ")" );

		//css transformations
		$(".page").eq(i).css({
		"left": PosX,
		"top": PosY,
		'transform': 'rotate(' + getRandomInt(-90,90) + 'deg)'
	});//end css transformations
}


function dump() {

	//append to body
	$("body").append("<div class='page'><div class='object-output'></div></div>");

	//print to make sure
	console.log("X coord: "+ PosX + " / Y coord: " + PosY);
}

//Flickr search for image
function getFlickrData(inputObject) {
	var flickrURL = "https://api.flickr.com/services/rest/" 
	+ "?method=flickr.photos.search&api_key="
	+ "30cfef3f3752b0b4dcdb0cd6fb9f7bea" 
	+ "&text=" + inputObject
	+ "&sort=" + "relevance" //documentation, we want them to sort
	+ "&format=json" + "&nojsoncallback=1";

	//AJAX
	$.ajax({
		url: flickrURL,
		type: "GET",
		dataType: "json",
		error: function(data) {
			console.log("ERROR from Flickr");
		},
		success: function(data) {

			var imgObj = data.photos.photo[count];
			var imgURL = "https://farm" + imgObj.farm + ".staticflickr.com/" + imgObj.server + "/" + imgObj.id + "_" + imgObj.secret + ".jpg"
			// console.log(imgURL);

			receivedImage(imgURL);
		} //endsuccess
	});//end ajax call

}

/*go time*/
$(document).ready(function() {
	console.log("Ready!");

	$("button").click(function() {
		$("a").css("visibility", "visible");

		j++;

		var inputObject = $("#input-object").val();
		getFlickrData(inputObject);
		$(".filename-container").append(inputObject + j + ".jpg<br>");
		//stop when j==24

		//counts how many clicks, goes down Flickr search
		count ++;

		dump();
	})//end click function

	$("a").click(function() {
		var address = prompt("Enter your mailing address");

		window.print();
		$(".address").append(address);
	})
});

