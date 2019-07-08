  $(function(){
    $('.resize-img').height($('.resize-img').width()/3);
  
    $(window).resize(function(){
      $('.resize-img').height($('.resize-img').width()/3);
    });
  });

  $(function(){
    $('.img-bok').height($('.img-bok').width()/3);
  
    $(window).resize(function(){
      $('.img-bok').height($('.img-bok').width()/3);
    });
  });

  // $(function(){
  //   $('.rost').height($('.rost').width()/3);
  
  //   $(window).resize(function(){
  //     $('.rost').height($('.rost').width()/3);
  //   });
  // });