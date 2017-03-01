// Script navbar
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

// === Service Fade In ===
$(document).ready(function(){
  $('.service-content').fadeIn(1000)
});

// Element Fadein when page reload
$(document).ready(function(){
  $("#hexGrid").fadeIn(1500)
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
    $(theModal + ' button.close').click(function() {
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

// about us fade in when scroll
/*$(document).ready(function() {
  $(window).scroll(function(){
    $('#').each(function(i){
      var bottom_of_object = $(this).offset().top + $(this).outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();
      if(bottom_of_window > bottom_of_object) {
        $(this).animate({'opacity':'1'}, 500);
      }
    });
  });
})*/
