(function($) {
	$(function() {
		var $win = $(window);
    
//location
    $('.location').each(function() {
      var $location = $(this),
					$mainList = $location.find('.one-depth'),
					currentMenu = $location.find('.current-menu'),
					currentA = currentMenu.children('a'),
					$subList = $location.find('.two-depth');
			
      currentA.on('click', function(e) {
				e.preventDefault();
				
				var curA = $(this),
						curLi = $(this).parent(),
						subID = curA.attr('href');
				
        if (curLi.hasClass('on')) {
					curLi.removeClass('on');
					$(subID).slideUp();
				} else {
					currentMenu.removeClass('on');
					$subList.slideUp();
					curLi.addClass('on');
					$(subID).slideDown();
				}
      });
    });
    

    $win.on('scroll', function() {
      var scrolled = $win.scrollTop(),
          winH = $win.height(),
          winHeight = scrolled + (winH * 3/4);
			
			//section 스르륵 효과
      $('.action').each(function() {
        var $action = $(this),
            actH = $action.height(),
            actOffsetTop = $action.offset().top;
      
        if (winHeight >= actOffsetTop) {
            $(this).addClass('srr');
          } else {
            $(this).removeClass('srr');
          }
      });
    });
		
//가로값에 따른 반응형
    if ($win.width() >= 1280) {
      $win.on('scroll', function() {
      var scrolled = $win.scrollTop(),
          winH = $win.height(),
          winHeight = scrolled + (winH * 3/4);
      
			//gnb 안보이게
			if (scrolled > 60) {
				$('.location').css('margin-top', 90);
				$('header').css('height', 90);
				$('.gnb').hide();
			} else {
				$('.location').css('margin-top', 150);
				$('.gnb').show();
				$('header').css('height', 150);
			}
    });
    } else if ($win.width() < 1280 && $win.width() > 769) {
      
    }else if ($win.width() <= 768) {
			
    }
	});
})(jQuery);