$(document).ready(function() {
    
/* For Sticky Navigation */
    
    $('.js--section-features').waypoint(function(direction){
        
        if (direction == 'down') {
            $('nav') .addClass('sticky');
        } else {
            $('nav') .removeClass('sticky');
        }
    }, {
             offset: '80px'                          
         });
    
/* Scroll on buttons */
    
    $('.js--scroll-to-plan').click(function () {
         $('html,body').animate({scrollTop: $('.js--section-plans').offset().top }, 1000); 
    
    });
    
    
     $('.js--scroll-to-start').click(function () {
          $('html,body').animate({scrollTop: $('.js--section-features').offset().top }, 1000);                                                           
});
    
/* Navigation Scroll */  
    
$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1000, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});
    
/* Animation on Scroll */  
    
$('.js--wp-1').waypoint(function(direction){
    
    $('.js--wp-1').addClass('animate__animated animate__fadeInDown');
}, {
    offset: '50%'
});
    
$('.js--wp-2').waypoint(function(direction){
    
    $('.js--wp-2').addClass('animate__animated animate__fadeInUp');
}, {
    offset: '50%'
});
    
$('.js--wp-3').waypoint(function(direction){
    
    $('.js--wp-3').addClass('animate__animated animate__fadeIn');
}, {
    offset: '50%'
});
    
$('.js--wp-4').waypoint(function(direction){
    
    $('.js--wp-4').addClass('animate__animated animate__pulse');
}, {
    offset: '50%'
}); 
    
/* Mobile Navigation */
    
     $(".js--nav-icon").click(() => {
    const nav = $(".js--main-nav");
 
    const icon = $(".js--nav-icon ion-icon");
    console.log(icon);
    nav.slideToggle(200);
    if (icon.attr("name") === "reorder-four") {
        icon.attr("name", "close-outline");
    } else {
        icon.attr("name", "reorder-four");
    }
});

    
});    