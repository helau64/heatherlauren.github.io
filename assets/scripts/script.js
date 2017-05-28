$(document).ready(function(){

  var pagination = new List('writing-index-container', {
    valueNames: ['title'],
    page: 5,
    pagination: true
  });

  function paginationStyling() {
    articles = $('.article');
    console.log(articles.length)
    if (articles.length % 5 === 0 || articles.length % 3 === 0) {
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
