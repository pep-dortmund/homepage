window.onload = function () {
  let pepElem = document.getElementById('pep');

  if (pepElem !== null) {
    console.log("adjusting height");
    let pepHeight = pepElem.offsetHeight;
    document.getElementById('content').style.marginTop = "-" + (pepHeight / 2) + "px";
  }
};


if($('#pepNavContainer').hasClass('nav-landing')){
  $(window).scroll(function (event) {
    var pos = $(window).scrollTop();
    var container = $('#pepNavContainer');

    if(pos > 300 && container.hasClass('bg-faded')){
      container.addClass('bg-dark');
      container.removeClass('bg-faded');
    } else if(pos <= 300 && container.hasClass('bg-dark')) {
      container.removeClass('bg-dark');
      container.addClass('bg-faded');
    };
  });
}

var $numberofSlides = $('.carousel-item').length;
var $currentSlide = Math.floor((Math.random() * $numberofSlides));
var $item = $('.carousel-item');

$('.carousel-indicators li').each(function(){
  var $slideValue = $(this).attr('data-slide-to');
  if($currentSlide == $slideValue) {
    $(this).addClass('active');
    $item.eq($slideValue).addClass('active');
  } else {
    $(this).removeClass('active');
    $item.eq($slideValue).removeClass('active');
  }
});
