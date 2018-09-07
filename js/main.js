$(document).ready(function() {

	// Svg animation
	let start = document.getElementById("blob-start");
	let end = document.getElementById("blob-end");
	let blogOne = document.getElementById("blog-one");
	let blogTwo = document.getElementById("blog-two");
	let phoneImg = document.getElementById("phone-img");
	let textMain = document.getElementById("text-main");
	let tl = new TimelineMax({delay:2, repeat: 0, repeatDelay: 1});


	tl
	.set(start, {
		scale: 0, transformOrigin: "top -300px",
		morphSVG: blogOne,
		ease: Power4.SlowMo
	})
	.set(blogOne, {
		scale: 0, transformOrigin: "top top",
		morphSVG: blogTwo,
		ease: Power4.SlowMo
	})
	.set(blogTwo, {
		scale: 0, transformOrigin: "top top"
	})
	.set(end, {
		scale: 0, css: {
			fill: "none"
		}
	})
	.to(start, 1.5, {
		scale: 1,
		morphSVG: end,
		ease: Power4.SlowMo
	})
	.set(phoneImg, {
		scale: 0, css: {
			display: "block"
		},
		ease: Power0
	})
	.set(textMain, {
		scale: 0, css: {
			display: "block"
		},
		ease: Power0
	})


	// Fullpage.js
	var myFullpage = new fullpage('#fullpage', {
		//Навигация
		lockAnchors: false,
		anchors:['firstPage', 'secondPage', 'thirdPage'],
		navigation: true,
		navigationPosition: 'right',
		navigationTooltips: ['01', '02', '03'],
		showActiveTooltip: true,
		slidesNavigation: true,
		slidesNavPosition: 'bottom',
		//Скроллинг
		css3: true,
		scrollingSpeed: 700,
		autoScrolling: true,
		fitToSection: true,
		fitToSectionDelay: 1000,
		easing: 'easeInOutCubic',
		easingcss3: 'ease',
		loopHorizontal: true,
		controlArrows: false,
		normalScrollElements: '#element1, .element2',
		touchSensitivity: 15,
		normalScrollElementTouchThreshold: 5,
		//Дизайн
		paddingTop: '3em'
	});

	
	$(window).bind('load', function(e){
		$('#fp-nav ul li a.active').parent().css('margin-bottom', '160px');
	});

	$(window).bind('mousewheel', function(e){
		$('#fp-nav ul li a').parent().css('margin-bottom', '0');
		$('#fp-nav ul li a.active').parent().css('margin-bottom', '160px');
	});

	$(window).bind('click', function(e){
		$('#fp-nav ul li a').parent().css('margin-bottom', '0');
		$('#fp-nav ul li a.active').parent().css('margin-bottom', '160px');
	});

}); 