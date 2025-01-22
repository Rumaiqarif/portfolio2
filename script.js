$(document).ready(function () {
	// Sticky navbar on scroll
	$(window).scroll(function () {
	  if (this.scrollY > 20) {
		$(".navbar").addClass("sticky");
	  } else {
		$(".navbar").removeClass("sticky");
	  }
  
	  if (this.scrollY > 500) {
		$(".scroll-up-btn").addClass("show");
	  } else {
		$(".scroll-up-btn").removeClass("show");
	  }
	});
  
	// Toggle menu on click (hamburger menu)
	$('.menu-btn').click(function() {
	  $('.navbar .menu').toggleClass('active');  // Toggle the menu visibility
	});
  
	// Slide-up button functionality
	$(".scroll-up-btn").click(function () {
	  $("html").animate({ scrollTop: 0 });
	  // Remove smooth scroll on slide-up button click
	  $("html").css("scrollBehavior", "auto");
	});
  
	// Applying smooth scroll behavior for menu items
	$(".navbar .menu li a").click(function () {
	  // Apply smooth scroll on menu item click
	  $("html").css("scrollBehavior", "smooth");
	});
  
	// Typing text animation script
	var typed = new Typed(".typing", {
	  strings: ["Developer", "Designer", "Freelancer"],
	  typeSpeed: 100,
	  backSpeed: 60,
	  loop: true,
	});
  
	var typed2 = new Typed(".typing-2", {
	  strings: ["Developer", "Designer", "Freelancer"],
	  typeSpeed: 100,
	  backSpeed: 60,
	  loop: true,
	});
  
	// Owl Carousel initialization
	$(".carousel").owlCarousel({
	  margin: 20,
	  loop: true,
	  autoplay: true,
	  autoplayTimeout: 2500,
	  autoplayHoverPause: true,
	  responsive: {
		0: {
		  items: 1,
		  nav: false,
		},
		600: {
		  items: 2,
		  nav: false,
		},
		1000: {
		  items: 2,
		  nav: false,
		},
	  },
	});
  
	// Horizontal scrolling functionality for mobile devices
	if (window.innerWidth <= 1024) { // Apply this on mobile/tablet view
	  let projContent = $(".proj-content");
  
	  // Horizontal scroll control for left and right
	  $(".scroll-left").click(function () {
		projContent.animate({ scrollLeft: "-=300" }, 300); // Scroll left by 300px
	  });
  
	  $(".scroll-right").click(function () {
		projContent.animate({ scrollLeft: "+=300" }, 300); // Scroll right by 300px
	  });
	}
  });
  