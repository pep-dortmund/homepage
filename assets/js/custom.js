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
