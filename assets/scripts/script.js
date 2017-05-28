$(document).ready(function(){

  function paginationStyling() {
    articles = $('.article');
    if (articles.length % 5 === 0) {
      $('.footer').css('border-right', '3px solid #0000B8');
    }
    else {
      $('.footer').css('border-right', '');
    }

    if (articles.length % 2 === 0) {
        $('.pagination').css('border-left', '');
        $('.pagination').css('border-right', '3px solid #0000B8');
    }
    else {
        $('.pagination').css('border-right', '');
        $('.pagination').css('border-left', '3px solid #0000B8');
    }
  }

  function navbarOpacityChange() {
    if (window.matchMedia('(max-width: 800px)').matches) {
        if ($('#toggle:checked').length > 0) {
          $('.main, .footer').css('opacity', 0.1);
          $('.navbar').css('border-left', '3px solid rgba(0, 0, 184, 0.1)');
        }
        else {
          $('.main, .footer').css('opacity', 1);
          $('.navbar').css('border-left', '');
        }
    }
    else {
      $('.main, .footer').css('opacity', 1);
      $('.navbar').css('border-left', '');
    }
  }

  var pagination = new List('writing-index-container', {
    valueNames: ['title'],
    page: 5,
    pagination: true
  });

  navbarOpacityChange();

  $(window).resize(function() {
    navbarOpacityChange();
  });

  $('#toggle').click(function() {
    navbarOpacityChange();
  });

  $('#toggle').keypress(function(e){
    if ((e.keyCode ? e.keyCode : e.which) == 13){
        $(this).trigger('click');
    }
  });

  if ($('.writing').length) {
    var articles;
    paginationStyling();
    pagination.on('updated', function(pagination) {
      $(document).scrollTop(0);
      setTimeout(function() {
        paginationStyling();
      }, 1)
    })
  }

});
