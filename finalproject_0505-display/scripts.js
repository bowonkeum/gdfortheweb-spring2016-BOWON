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

	//formerly known as "dump"
	//this is setting the stage
	$("body").append("<div class='page'><div class='object-output'></div></div>");

	//saves the latest ".object-output" class as a new variable
	//otherwise, just ".object-output" is changing ALL the object-outputs
	var $output = $(".object-output").last();

	//is referring to the 'page' class of the latest ".object-output" class
	//saves it as a new variable, "page", which is specific (just using .page
	//will refer to ALL the pages
	var $page = $output.parent();

	//refers only to the output
	$output.css("background-image", "url(" + url + ")" );

	//css transformations for the page
	$page.css({
		"left": PosX,
		"top": PosY,
		'transform': 'rotate(' + getRandomInt(-90,90) + 'deg)'
	});//end css transformations
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
			//put url into the object-output div as a background

		} //endsuccess
	});//end ajax call

}

/*go time*/
$(document).ready(function() {
	console.log("Ready!");

	$("button").click(function() {
		
		var inputObject = $("#input-object").val();
		$(".filename-container").append(inputObject + j + ".jpg<br>");

		getFlickrData(inputObject);
		//stop when j==24

		//counts how many clicks, goes down Flickr search
		count ++;

		//turning the link visible after the search goes
		$("a").css("visibility", "visible");

		//counter for the Flickr items
		j++;
	})//end click function

	$("a").click(function() {
		var address = prompt("Enter your mailing address");

		window.print();
		$(".address").append(address);
	})
});


