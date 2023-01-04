function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

var brand_config = getParameterByName('brand');

if (brand_config) $.cookie("dls_config", brand_config);
else(brand_config = $.cookie("dls_config"));


if (brand_config && brand_config != "null") {
    $('link[rel=stylesheet][href~="css/fonts/webplex.css"]').remove();
    $('link[rel=stylesheet][href~="css/config/webplex.css"]').remove();
    $('head').prepend($('<link rel="stylesheet" href="css/fonts/' + brand_config + '.css" type="text/css" media="screen"/>'));
    $('head').prepend($('<link rel="stylesheet" href="css/config/' + brand_config + '.css" type="text/css" media="screen"/>'));
} else {
    brand_config = "webplex";
}


$(function () {

    $(".items-wrap .item .media-wrap .media .content img, .items-wrap .item .meta-wrap .header img").each(function () {
        var src_string = $(this).attr('src');
        var img_src_location = src_string.lastIndexOf('/');
        var img_src = src_string.substring(img_src_location + 1);
        $(this).attr("src", "img/brand-images/" + brand_config + "/" + img_src);
        $(this).on("error", function () {
            $(this).attr("src", "img/brand-images/webplex/" + img_src);
        });
    });

    $(window).scroll(function () {
        var header = $('#site-header'),
            scroll = $(window).scrollTop();
        if (scroll >= 110) header.addClass('sticky');
        else header.removeClass('sticky');
    });

    $(".module-container-bala").click(function () {
        $(this).hide();
    });

    $("#menu").mouseleave(function () {
        $(".global-menu-wrap > .menu-toggle").prop('checked', false);
        $("html").removeClass('globalmenu-open');
    });

    $(".global-menu-wrap > .menu-toggle").click(function (event) {
        if ($(this).is(':checked')) {
            $("html").addClass('globalmenu-open');
        } else {
            $("html").removeClass('globalmenu-open');
            document.getElementsByClassName("header").removeEventListener('touchmove');
        }
    });

    (function () {
        var _overlay = document.getElementById('menu');
        var _clientY = null; // remember Y position on touch start

        _overlay.addEventListener('touchstart', function (event) {
            if (event.targetTouches.length === 1) {
                // detect single touch
                _clientY = event.targetTouches[0].clientY;
            }
        }, false);

        _overlay.addEventListener('touchmove', function (event) {
            if (event.targetTouches.length === 1) {
                // detect single touch
                disableRubberBand(event);
            }
        }, false);

        function disableRubberBand(event) {
            var clientY = event.targetTouches[0].clientY - _clientY;

            if (_overlay.scrollTop === 0 && clientY > 0) {
                // element is at the top of its scroll
                event.preventDefault();
            }

            if (isOverlayTotallyScrolled() && clientY < 0) {
                //element is at the top of its scroll
                event.preventDefault();
            }
        }

        function isOverlayTotallyScrolled() {
            // https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollHeight#Problems_and_solutions
            return _overlay.scrollHeight - _overlay.scrollTop <= _overlay.clientHeight;
        }
    }())
    //https://github.com/willmcpo/body-scroll-lock
});
