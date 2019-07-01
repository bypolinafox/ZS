$(function(){
    $('.to-resize').height($('.to-resize').width()/3);
  
    $(window).resize(function(){
      $('.to-resize').height($('.to-resize').width()/3);
    });
  });

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