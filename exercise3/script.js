// //variables
// var name = "Bo-Won";
// var zip = 10001;
// var greeting = "Hello " + name;


// //function
// function sayHello () {
// 	console.log(greeting);
// }

// sayHello();

// //first function is hovered
// //second function is unhovered
// $("h1").hover(function() {
// 	$(this).html("Hovered");
// 	$(this).addClass("hovered");
// 	$("html").addClass("background");
// }, 
// 	function() {
// 	$(this).html("Unhovered");
// 	$(this).removeClass("hovered");
// 	$("html").removeClass("background");
// });

// $("h1").click(function() {
// 	$(this).toggleClass("clicked");

// 	var randNumber = Math.random() * 100;
// 	console.log(randNumber);

// 	$(this).css("font-size", randNumber + "px");
// });

for (i = 0; i < 100; i++) {
	$("body").append("<div></div>");
}

$("div").hover(function () {
	var rando = Math.floor(Math.random() * 100);

	$(this).css("width", rando + "px");
});