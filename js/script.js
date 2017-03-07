// Script navbar
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

// === Service Fade In ===
$(document).ready(function(){
  $('.service-content').fadeIn(4000)
});

// Element Fadein when page reload
$(document).ready(function(){
  $("#hexGrid").fadeIn(800)
});

// .modal-backdrop
$(".modal-fullscreen").on('show.bs.modal', function () {
  setTimeout( function(){
    $(".modal-backdrop").addClass("modal-backdrop-fullscreen");
  }, 0);
});

$(".modal-fullscreen").on('hidden.bs.modal', function() {
  $(".modal-backdrop").addClass("modal-backdrop-fullscreen");
});

// Modal Video
$(function() {
  $(".video").click(function(){
    var theModal = $(this).data("target"),
    videoSRC = $(this).attr("data-video"),
    videoSRCauto = videoSRC + "?modestbranding=1&rel=0&controls=0&showinfo=0&html5=1&autoplay=1";
    $(theModal + ' iframe').attr('src', videoSRCauto);
    $(theModal + ' button.close-modal').click(function() {
      $(theModal + ' iframe').attr('src', videoSRC);
    });
  });
});

// Smooth Scrolling
$(document).ready(function(){
  $(".about-arrow a[href='#num2']").on('click', function(event){
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 900, function(){
        window.location.hash = hash;
      });
    } // End if
  });
})

// Fade in when hover
/*$(function() {
  $(".hex a").hover(function() {
    $(".hex p").fadeIn();
  }, function() {
    $(".hex p").fadeOut();
  });
});
$('.hex a').mouseover(function() {
  $(this).children('.hex p').stop()animate(
    {opacity:1},300);
});

$('.hex a').mouseleave(function() {
  $(this).children('.hex p').stop()animate(
    {opacity:0},500);
});
$('.hex a').mouseover(function(){
    //show the box
    $(this).children('.hex p').stop().animate({opacity:1},300);
});
$('.hex a').mouseleave(function(){
    //hide the box
    $(this).children('.hex p').stop().animate({opacity:0},500);
});*/

// Fade In on page reload
/*$(document).ready(function() {
  $('#hexGrid').fadeIn("fast")
});*/
// about us fade in when scroll
$(function() {
  $(window).scroll( function(){
    $('.tagline, .aboutus').each( function(i){
      var bottom_of_object = $(this).position().top + $(this).outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();
      bottom_of_window = bottom_of_window + 200;
      if( bottom_of_window > bottom_of_object ){
          $(this).animate({'opacity':'1'},500);
      }
    });
  });
});
