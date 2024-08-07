$(function(){
// フェードイン、アウト
const fadeFv1 = () => {
  $('.fv1').fadeIn(2000,function(){
    setTimeout(function(){
  $('.fv1').fadeOut(2000,function(){
    fadeFv2();
  });
    },3000);
  });  
};

const fadeFv2 = () => {
  $('.fv2').fadeIn(2000,function(){
    setTimeout(function(){
  $('.fv2').fadeOut(2000,function(){
    fadeFv3();
  });
    },3000);
  });  
};

const fadeFv3 = () => {
  $('.fv3').fadeIn(2000,function(){
    setTimeout(function(){
  $('.fv3').fadeOut(2000,function(){
    fadeFv1();
  });
    },3000);
  });  
};
fadeFv1();




let winHeight,winScroll,scrollPos,scrollPosShort;

$(window).on('load scroll',function(){
	winScroll = $(window).scrollTop();
	winHeight = $(window).height();
	scrollPos = winHeight * 0.8 + winScroll;
  scrollPosShort = winHeight + winScroll;

	// $(".left").each(function(){
		if($('.left').offset().top <= scrollPos){
			$('.left').addClass("show");
		}

	// });

  // $(".right").each(function(){
		if($('.right').offset().top <= scrollPosShort){
			$('.right').addClass("show");
		}
	// });
  

  $(".sutudentLeft").each(function(){
  if($(this).offset().top <= scrollPosShort){
    $(this).addClass("opacity");
  }
});


$(".sutudentRight").each(function(){
 
  if($(this).offset().top <= scrollPosShort){
    $(this).addClass("opactiyright");
  }
});

});














});