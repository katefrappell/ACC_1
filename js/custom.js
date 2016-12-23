$(document).ready(function(){
	//jquery methods go here inside...


	$('#contact-submit').submit(function(event){
		event.stopPropagation();
		event.preventDefault();

		$.post( "index.php", $( "#contact-submit" ).serialize(), function(data) {
			$('#form-message').html(data);
		});

	});

// Home - Slider


	$('.my-slider').unslider({
		autoplay:true,
		delay:10000
	});


  // Email needs '@'

  function isAValidEmailAddress(emailAddress){
    return /^[a-z0-9_\-\.]{2,}@[a-z0-9_\-\.]{2,}\.[a-z]{2,}$/i.test(emailAddress);
}



// Form

// function validateForm() {
//   $('#info').html("There were some problems with your form submission:<br>Please fill in ");
//   $('#errors').hide();
  
//     if ( $('#name').val() == null || $('#name').val() == "") {
//       $('#info').append("Name correctly.");
//       $('#errors').show();
//         return false;
//      }
//   else if ( $('#breed').val() == null || $('#breed').val() == "" || isAValidEmailAddress( $('#breed').val() ) == false) {
//       $('#info').append("breed correctly.");
//       $('#errors').show();
//         return false;
    
//     }else if ( $('#story').val() == null || $('#story').val() == "select") {
//       $('#info').append("story correctly.");
//       $('#errors').show();
//         return false;
//     }else if ( $('#file').val() == null || $('#file').val() == "") {
//       $('#info').append("file correctly.");
//       $('#errors').show();
//         return false;
//     }
  
// }

// Logo Slider

/*

Suga Slider

Usage ---------

$(window).load(function(){
  $('#logos').suga({
    'transitionSpeed': 2000,
    'snap': false
  });
});

The markup should resemble the markup here

*/

$.fn.suga = function(options) {
  var settings = $.extend({
      'transitionSpeed': 3000,
      'snap': false
  }, options);

  var $this = $(this);

  // add plugin specific classes
  $this.addClass('suga-slider-wrap');
  $this.children('ul').addClass('suga-slider-group');
  $this.find('li').addClass('suga-slide');  

  // caching $$$
  var $slide = $('.suga-slide'),
			$firstEl = $('.suga-slide:first'),
      $group = $('.suga-slider-group'),
      $wrap = $('.suga-slider-wrap');

  var slideWidth = $slide.outerWidth(),
  		slideHeight = $('.suga-slide').height(),
      slideCount = $slide.length,
      totalWidth = slideWidth * slideCount;

  // set width on group element
  $group.width(totalWidth);
  $wrap.height(slideHeight);
  $wrap.wrap('<div class="suga-container"></div>');

  // add first class at start
  if (!$group.find($firstEl).hasClass("suga-first")) {
    $group.find($firstEl).addClass("suga-first");
  }

  // lets move baby
  var transitionSnap = function() {
    var $firstEl = $group.find('.suga-first').html();
    
    $group.find('.suga-first').animate({
      'margin-left': '-' + slideWidth + 'px'
    }, function(){
     $group.append('<li class="suga-slide">' + $firstEl + '</li>');
     $(this).remove(); 
     $group.find('li:first').addClass("suga-first");
      
    });  
  };

  var transitionScroll = function() {
     var $firstEl = $group.find('.suga-first').html();

    $group.find('.suga-first').animate({
      'margin-left': '-' + slideWidth + 'px'
    }, settings.transitionSpeed, 'linear', function(){
     $group.append('<li class="suga-slide">' + $firstEl + '</li>');
     $(this).remove(); 
     $group.find('li:first').addClass("suga-first");
     transitionScroll();
    });       
  };

  if (settings.snap) {
    window.setInterval(transitionSnap, settings.transitionSpeed);  
  } else {
    transitionScroll();
  }
}

$(window).load(function(){
  $('#logos').suga({
    'transitionSpeed': 2000,
    'snap': true
  });
});




});
