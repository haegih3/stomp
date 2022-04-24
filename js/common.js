window.addEventListener('load', function() {
    // include
    var allElements = document.getElementsByTagName('*');
    Array.prototype.forEach.call(allElements, function(el) {
        var includePath = el.dataset.includePath;
        if (includePath) {
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    el.outerHTML = this.responseText;
                }
            };
            xhttp.open('GET', includePath, true);
            xhttp.send();
        }
    });
});


$(function () {
    var $win = $(window);

    //전체메뉴버튼
    $('.tnb-group').each(function () {
        var $group = $(this),
            $btn = $group.find('.btn-tnb'),
            $tnb = $group.find('.tnb'),
            $tnbMain = $group.find('.tnb-list'),
            $lines = $tnbMain.children('li'),
            $tnbSub = $group.find('.tnb-sub'),
            $lineSub = $tnb.children('li'),
            i = $lines.index(),
            currentIndex = 0,
            $allA = $lines.find('a');
        //전체메뉴버튼 눌렀을 때
        $btn.on('click', function () {
            if ($group.hasClass('full')) {
                $group.removeClass('full');
                $lines.css({
                    paddingLeft: '50px',
                    opacity: 0
                });
                $allA.removeClass('on');
                $tnbSub.slideUp();
                //main 스크롤 되게
                $("html, body").css({
                    "overflow": "auto",
                    "height": "auto"
                });
                $("#wrap").off("scroll touchmove mousewheel");
            } else {
                // 메뉴열기
                $group.addClass('full');
                // 메뉴글씨 들어오기
                $lines.each(function (i) {
                    $(this).delay(i * 200).animate({
                        paddingLeft: 0,
                        opacity: 1
                    }, 1000);
                });
                //main 스크롤 방지
                $("html, body").css({
                    "overflow": "hidden",
                    "height": "100%"
                });
                $("#wrap").on("scroll touchmove mousewheel", function (e) {
                    e.preventDefault();
                });
            }
        });
    });

    //gnb hover 할 때 보여지기
    $('.gnb').each(function () {
        var $gnb = $(this),
            $gnbUl = $gnb.children('ul'),
            $gnbMenu = $gnbUl.children('li'),
            $bg = $gnb.find('.gnb-bg'),
            $menu = $gnb.find('.gnb-menu'),
            $lnb = $menu.find('.lnb');
        $menu.on('mouseenter', function () {
            $(this).children('.lnb').stop().slideDown('fast').css('opacity', 1);
            $bg.addClass('on');
        });
        $menu.on('mouseleave', function () {
            $(this).children('.lnb').stop().slideUp('fast').css('opacity', 0);
            $bg.removeClass('on');
        });
    });


    //가로값에 따른 반응형
    if ($win.width() >= 1280) {

    } else if ($win.width() < 1280 && $win.width() > 769) {
            
        //전체메뉴버튼
        $('.tnb-list').each(function() {
            var $tnbMain = $('.tnb-list'),
                    lines = $tnbMain.children('li'),
                    allA = lines.children('a'),
                    $tnbSub = $tnbMain.find('.tnb-sub');

            //sub메뉴 아코디언
            allA.on('click', function(e) {
                e.preventDefault();

                var subID = $(this).attr('href'),
                        $currentSub = $(subID);
                if ($(this).hasClass('on')) {
                    $(this).removeClass('on');
                    $currentSub.slideUp();
                } else {
                    allA.removeClass('on');
                    $tnbSub.slideUp();
                    $(this).addClass('on');
                    $currentSub.slideDown();
                }
            });
        });

    } else if ($win.width() <= 768) {
            
        //전체메뉴버튼
        $('.tnb-list').each(function() {
            var $tnbMain = $('.tnb-list'),
                    lines = $tnbMain.children('li'),
                    allA = lines.children('a'),
                    $tnbSub = $tnbMain.find('.tnb-sub');

            //sub메뉴 아코디언
            allA.on('click', function(e) {
                e.preventDefault();

                var subID = $(this).attr('href'),
                        $currentSub = $(subID);
                if ($(this).hasClass('on')) {
                    $(this).removeClass('on');
                    $currentSub.slideUp();
                } else {
                    allA.removeClass('on');
                    $tnbSub.slideUp();
                    $(this).addClass('on');
                    $currentSub.slideDown();
                }
            });
        });

    }
});