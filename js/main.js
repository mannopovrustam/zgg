
var layers = document.getElementsByClassName('left-layer');
  for (const layer of layers) {
   layer.classList.toggle("active");
 }
 setInterval(function(){ for (const layer of layers) {
   layer.classList.toggle("active");
 } }, 2000);




document.body.onload = function() {
	
	setTimeout(function() {
		var preloader = document.getElementById('page-preloader');
		if(!preloader.classList.contains('done')) {
			preloader.classList.add('done');
		}
	},1500)
};


let t1 = new TimelineMax({paused: true});


t1.to(".menu", .4, {
     width: "40vw",
});

t1.staggerFrom(".menu ul li", .5, {opacity: 0, y: 10, ease:Expo.easeOut}, 0.1);

t1.reverse();
$(document).on("click", ".header-menu__btn", function() {
     t1.reversed(!t1.reversed());
});

$(document).on("click", ".menu-close", function() {
     t1.reversed(!t1.reversed());
});


let reserve = document.querySelector('.reserve');
	let reserveIco = document.querySelector('.tel-ico');
	let reserveClose = document.querySelector('.reserve__close');
	reserveIco.onclick = function() {
	    reserve.classList.add('reserve-show');
	}
	reserveClose.onclick = function() {
	    reserve.classList.remove('reserve-show');
	}

	window.onclick = function(event) {
	    if (event.target == reserve) {
	        reserve.classList.remove('reserve-show');
	    }
	}


$('.contact-form__tel').inputmask("+\\9\\98(99)999-99-99");



