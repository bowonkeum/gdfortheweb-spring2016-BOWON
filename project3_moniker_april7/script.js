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
function lunaMaurer (shapeWidth, shapeHeight) {

	var PosX = getRandomInt(0, vWidth-shapeWidth);
	var PosY = getRandomInt(0, vHeight-shapeHeight);

	console.log("LM PosXPosY", PosX, PosY);
	
	$('.luna-maurer').css({
		'top': PosY,
		'left': PosX,
		'transform': 'rotate(' + getRandomInt(0,90) + 'deg)'
	});
}

//date
function date (shapeWidth, shapeHeight) {

	var PosX = getRandomInt(0, vWidth-shapeWidth);
	var PosY = getRandomInt(0, vHeight-shapeHeight);

	console.log("date PosXPosY", PosX, PosY);
	
	$('.date').css({
	'top': PosY + 'px',
	'left': PosX + 'px'
	});
}

//time
function time (shapeWidth, shapeHeight) {

	var PosX = getRandomInt(0, vWidth-shapeWidth);
	var PosY = getRandomInt(0, vHeight-shapeHeight);

	console.log("time PosXPosY", PosX, PosY);
	
	$('.time').css({
		'top': PosY,
		'left': PosX
	});

	$("#blink").each(function() {
		var elem = $(this);
		setInterval(function() {
			if (elem.css('visibility') == 'visible') {
				elem.css('visibility', 'hidden');
			} else {
				elem.css('visibility', 'visible');
			}
		}, 500);
	});
}

//place
function place (shapeWidth, shapeHeight) {

	var PosX = getRandomInt(0, vWidth-shapeWidth);
	var PosY = getRandomInt(0, vHeight-shapeHeight);

	console.log("place PosXPosY", PosX, PosY);
	
	$('.place').css({
		'top': PosY,
		'left': PosX
	});
}

//toggling
function toggleThis () {
	
	// $('.luna-maurer').click(function() {
	// 	$('.date > p').toggle();
	// })

	// $('.date').click(function() {
	// 	$('.time > p').toggle();
	// })

	// $('.time').click(function() {
	// 	$('.place > p').toggle();
	// })

	// $('.place').click(function() {
	// 	$('.luna-maurer > p').toggle();
	// })

	$('.luna-maurer').click(function() {
		$('.luna-maurer > p').toggle();
	})

	$('.date').click(function() {
		$('.date > p').toggle();
	})

	$('.time').click(function() {
		$('.time > p').toggle();
	})

	$('.place').click(function() {
		$('.place > p').toggle();
	})

}

//execute functions
	lunaMaurer(1000, 400);
	date(300, 100);
	time(500, 100);
	place(200, 200);

	toggleThis();

	$('.moniker-star').click(function() {

		$('div:not(body, .reset, .moniker-star)').html("studio moniker").toggle();
	});

});