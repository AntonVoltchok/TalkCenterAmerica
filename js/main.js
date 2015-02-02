// -------------
// VIDEO MODALS
// -------------


// INTRO MODAL
// -----------
jQuery(document).ready(function($) {
	
$('#open-popup').magnificPopup({
    items: [
      {
        src: 'https://www.youtube.com/watch?v=NbmosHkxSnI',
        type: 'iframe' // this overrides default type
      },
      {
        src: 'https://www.youtube.com/watch?v=Iqse-Mw_h6s#t=218',
        type: 'iframe' // this overrides default type
      },
      {
        src: 'https://www.youtube.com/watch?v=ILfA-Tc1Fcw',
        type: 'iframe' // this overrides default type
      },
 	  {
        src: 'https://www.youtube.com/watch?v=H39OY4UB8jI',
        type: 'iframe' // this overrides default type
      }
    ],
    gallery: {
      enabled: true
    },
    type: 'image' // this is a default type
});

// VIDEO SECTION MODALS
// --------------------	
$('#latest-videos').magnificPopup({
    items: [
      {
        src: 'https://www.youtube.com/watch?v=Iqse-Mw_h6s#t=218',
        type: 'iframe' // this overrides default type
      },
      {
        src: 'https://www.youtube.com/watch?v=ILfA-Tc1Fcw',
        type: 'iframe' // this overrides default type
      },
 	  {
        src: 'https://www.youtube.com/watch?v=H39OY4UB8jI',
        type: 'iframe' // this overrides default type
      }
    ],
    gallery: {
      enabled: true
    },
    type: 'image' // this is a default type
});	
	
$('#shopping-videos').magnificPopup({
    items: [
 	    {
        src: 'https://www.youtube.com/watch?v=wzInyegCEE4',
        type: 'iframe' // this overrides default type
      }
    ],
    gallery: {
      enabled: true
    },
    type: 'image' // this is a default type
});	

$('#news-videos').magnificPopup({
    items: [
      {
        src: 'https://www.youtube.com/watch?v=bwLNCOxCC3w',
        type: 'iframe' // this overrides default type
      },
      {
        src: 'https://www.youtube.com/watch?v=Jp2OfQ--qUc',
        type: 'iframe' // this overrides default type
      },
 	    {
        src: 'https://www.youtube.com/watch?v=M0wxwj2f5Gg',
        type: 'iframe' // this overrides default type
      }
    ],
    gallery: {
      enabled: true
    },
    type: 'image' // this is a default type
});	

$('#paranormal-videos').magnificPopup({
    items: [
 	    {
        src: 'https://www.youtube.com/watch?v=fZZr8Mm5AQQ',
        type: 'iframe' // this overrides default type
      }
    ],
    gallery: {
      enabled: true
    },
    type: 'image' // this is a default type
});	
	
$('#relationship-videos').magnificPopup({
    items: [
      {
        src: 'https://www.youtube.com/watch?v=IOq80Gqq-eU',
        type: 'iframe' // this overrides default type
      },
      {
        src: 'https://www.youtube.com/watch?v=GurFUqmFSR4',
        type: 'iframe' // this overrides default type
      }
    ],
    gallery: {
      enabled: true
    },
    type: 'image' // this is a default type
});	
	
$('#trailers-videos').magnificPopup({
    items: [
      {
        src: 'https://www.youtube.com/watch?v=9yO1ZnuRjwM',
        type: 'iframe' // this overrides default type
      },
      {
        src: 'https://www.youtube.com/watch?v=jhEsfKe_Xxo',
        type: 'iframe' // this overrides default type
      }
    ],
    gallery: {
      enabled: true
    },
    type: 'image' // this is a default type
});		
		
});




// ------------------------
// COUNTER IN STATS SECTION
// ------------------------

jQuery(document).ready(function($) {
	$('.counter').counterUp({
		delay: 10,
		time: 2200
	});
});




// ----
// MENU
// ----

$(function() {
	
$("#nav").addClass("js").before('<div id="menu" class="fa fa-bars faa-horizontal"></div>');
$("#menu").click(function(){
	$("#nav").toggle();
});

$(window).resize(function(){
	if(window.innerWidth > 1005) {
		$("#nav").removeAttr("style");
		$("#nav .menu-li a").unbind('click');
	} else {
	$('#nav li a').on("click", function(){
	$('#nav').hide();
	});	
	} 
});	
 
});
  



// ----------------------------
// CONTACT FORM JAVASCRIPT/AJAX
// ----------------------------


jQuery(document).ready(function($) {
var messageDelay = 2000;  // How long to display status messages (in milliseconds)

// Init the form once the document is ready
$( init );

	// Initialize the form
function init() {
  // Hide the form initially.
  // Make submitForm() the form's submit handler.
  // Position the form so it sits in the centre of the browser window.
  $('#contactForm').hide().submit( submitForm ).addClass( 'positioned' );
  // When the "Send us an email" link is clicked:
  // 1. Fade the content out
  // 2. Display the form
  // 3. Move focus to the first field
  // 4. Prevent the link being followed
  $('a[href="#contactForm"]').click( function() {
    $('#content').fadeTo( 'slow', .2 );
    $('#contactForm').fadeIn( 'slow', function() {
      $('#senderName').focus();
    } )
    return false;
  } );
   // When the "Cancel" button is clicked, close the form
  $('#cancel').click( function() { 
    $('#contactForm').fadeOut();
    $('#content').fadeTo( 'slow', 1 );
  } );  
  // When the "Escape" key is pressed, close the form
  $('#contactForm').keydown( function( event ) {
    if ( event.which == 27 ) {
      $('#contactForm').fadeOut();
      $('#content').fadeTo( 'slow', 1 );
    }
  } );

}

// Submit the form via Ajax
function submitForm() {
  var contactForm = $(this);
  // Are all the fields filled in?
  if ( !$('#senderName').val() || !$('#senderEmail').val() || !$('#message').val() ) {
    // No; display a warning message and return to the form
    $('#incompleteMessage').fadeIn().delay(messageDelay).fadeOut();
    contactForm.fadeOut().delay(messageDelay).fadeIn();
  } else {
    // Yes; submit the form to the PHP script via Ajax
    $('#sendingMessage').fadeIn();
    contactForm.fadeOut();

    $.ajax( {
      url: contactForm.attr( 'action' ) + "?ajax=true",
      type: contactForm.attr( 'method' ),
      data: contactForm.serialize(),
      success: submitFinished
    } );
  }
  // Prevent the default form submission occurring
  return false;
}
	
// Handle the Ajax response
function submitFinished( response ) {
  response = $.trim( response );
  $('#sendingMessage').fadeOut();

  if ( response == "success" ) {

    // Form submitted successfully:
    // 1. Display the success message
    // 2. Clear the form fields
    // 3. Fade the content back in

    $('#successMessage').fadeIn().delay(messageDelay).fadeOut();
    $('#senderName').val( "" );
    $('#senderEmail').val( "" );
    $('#message').val( "" );

    $('#content').delay(messageDelay+500).fadeTo( 'slow', 1 );

  } else {
    // Form submission failed: Display the failure message,
    // then redisplay the form
    $('#failureMessage').fadeIn().delay(messageDelay).fadeOut();
    $('#contactForm').delay(messageDelay+500).fadeIn();
  }
}
});


// SCROLL TO ANIMATION
jQuery(document).ready(function($) {
$('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
        || location.hostname == this.hostname) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
           if (target.length) {
             $('html,body').animate({
                 scrollTop: target.offset().top -140 }, 1000);
            return false;
        }
    }
});
});



// ------------------------
//  NOTES , IDEA , MISC...
// ------------------------


//First time trying to animate jquery

/*
  $('#navvvv-button').click(function(){
    $('.skype').fadeIn(2000);
	$('.practiceeee-fade').fadeIn(1000);
  });
*/






