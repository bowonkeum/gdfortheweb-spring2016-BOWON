$(document).ready(function() {
	console.log("ready!");

//viewport dimensions
	var vWidth = $(window).width();
	var vHeight = $(window).height();

//randoInt
function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}

//lunaMaurer
//future note: I can put parameters for MAX threshold
function lunaMaurer () {

	var PosX = getRandomInt(0, vWidth-800);
	var PosY = getRandomInt(0, vHeight-400);

	console.log("LM PosXPosY", PosX, PosY);
	
	$('.luna-maurer').css({
		'top': PosY,
		'left': PosX
	});
}

//studioMoniker
function studioMoniker () {

	var PosX = getRandomInt(0, vWidth-200);
	var PosY = getRandomInt(0, vHeight-200);

	console.log("SM PosXPosY", PosX, PosY);
	
	$('.studio-moniker').css({
		'top': PosY,
		'left': PosX
	});
}

//date
function date () {

	var PosX = getRandomInt(0, vWidth-300);
	var PosY = getRandomInt(0, vHeight-40);

	console.log("date PosXPosY", PosX, PosY);
	
	$('.date').css({
	'top': PosY + 'px',
	'left': PosX + 'px'
	});
}

	// $('.date').css({
	// 	'top': PosY,
	// 	'left': PosX
	// });

//time
function time () {

	var PosX = getRandomInt(0, vWidth-100);
	var PosY = getRandomInt(0, vHeight-50);

	console.log("time PosXPosY", PosX, PosY);
	
	$('.time').css({
		'top': PosY,
		'left': PosX
	});
}

//place
function place () {

	var PosX = getRandomInt(0, vWidth-100);
	var PosY = getRandomInt(0, vHeight-50);

	console.log("place PosXPosY", PosX, PosY);
	
	$('.place').css({
		'top': PosY,
		'left': PosX
	});
}

//toggling
function toggle () {
	
	$('.luna-maurer').click(function() {
		$('h1').toggle();
	})

	$('.studio-moniker').click(function() {
		$('h2').toggle();
	})

	$('.date').click(function() {
		$('.date > h3').toggle();
	})

	$('.time').click(function() {
		$('.time > h3').toggle();
	})

	$('.place').click(function() {
		$('.place > h3').toggle();
	})

	$('.description').click(function() {
		$('p').toggle('slow', function() {
			skew();
		})
	})

}

//skew
function skew () {

	$('div').hover(function() {

		var randoNum = Math.floor(Math.random() * 50);

		$(this).css("transform", 'skewX(' + randoNum + 'deg)');
	}, function() { 
		$(this).css("transform", 'skewX(' + 0 + 'deg)');
	});
}

//execute functions
	lunaMaurer();
	studioMoniker();
	date();
	time();
	place();
	toggle();
});