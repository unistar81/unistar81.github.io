/*jslint browser: true*/
/*global $, alert*/

$(document).ready(function () {

    function cards() {
        $("#components .component-card").each(function () {
            var temp = $(this);
            $(this).load("../alpha/cards.html .container");

            setTimeout(function () {
                $(temp).find('.media .content img, .meta-wrap .header img').each(function () {

                    var src_string = $(this).attr('src');
                    $(this).attr("src", "../alpha/" + src_string);
                });
            }, 500);
        });
    }

    function componentCheck() {
        if (window.location.hash === "#components") {
            cards();
            if ($(window).width() <= 980) {
                componentMenuClose();
            } else {
                componentMenuOpen();
            }
        } else {
            componentMenuClose();
        }
    }

    function componentMenuOpen() {
        $("nav").css("position", "fixed");
        $(".content").css("position", "absolute");
        $(".content").css("width", "100%");
        $('input[type=checkbox]#menu-toggle').prop('checked', true);
    }

    function componentMenuClose() {
        $("nav").css("position", "");
        $(".content").css("position", "");
        $(".content").css("width", "90%");
        $('input[type=checkbox]#menu-toggle').prop('checked', false);
    }

    componentCheck();

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
        $('link[rel=stylesheet][href~="../alpha/css/fonts/webplex.css"]').remove();
        $('link[rel=stylesheet][href~="../alpha/css/config/webplex.css"]').remove();
        $('style[data-href~="../alpha/css/config/webplex.css"]').remove();
        $('style[data-href~="../alpha/css/fonts/webplex.css"]').remove();
        $('head').prepend($('<link rel="stylesheet" href="../alpha/css/fonts/' + brand_config + '.css" type="text/css" media="screen"/>'));
        $('head').prepend($('<link rel="stylesheet" href="../alpha/css/config/' + brand_config + '.css" type="text/css" media="screen"/>'));
    } else {
        brand_config = "webplex";
    }

    setTimeout(function () {
        var bg = $("body").css('background');

        var start_pos = bg.indexOf('d.') + 1;
        var end_pos = bg.indexOf(')', start_pos) - 1;
        var img_ext = bg.substring(start_pos, end_pos);

        var x = "../alpha/img/brand-images/" + brand_config + "/page-background" + img_ext;
        $('.content-container').css('background-image', 'url(' + x + ')');
        console.log(x);
    }, 100);

    var hash = window.location.hash;

    if (window.location.hash) {
        $('section').not(hash).hide();
    } else {
        $('section').not("#about").hide();
    }


    $('.logo').click(function () {
        var template_brand = "index.html?brand=" + brand_config;
        window.location.href = template_brand;
    });

    $('nav ul > li a').on('click', function (e) {
        e.preventDefault();
        var target = $(this).attr('href');
        window.location.hash = target;
        $(target).show().siblings("section").hide();
        $(this).parents().find('a').removeClass("current");
        $(this).addClass("current");
        componentCheck();
        if ($(window).width() <= 980) {

        }
    });

    $('.subnav li a').on('click', function (e) {
        e.preventDefault();
        var target = $(this).parent().parent().parent().find('a').attr('href');
        window.location.hash = target;
        $(target).show().siblings("section").hide();
        $(this).parent().parent().parent().parent().find('a').removeClass("current");
        $(this).parent().parent().parent().find('span a').addClass("current");
        componentCheck();
    });

    //    function bodyFadeIn() {
    //        $('body').css('display', 'none');
    //        $('body').delay(800).fadeIn(500);
    //    }

    var hexDigits = new Array("0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f");

    function hex(x) {
        return isNaN(x) ? "00" : hexDigits[(x - x % 16) / 16] + hexDigits[x % 16];
    }

    function rgb2hex(rgb) {
        rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
        return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
    }

    function font_desc() {
        $(".type-style .meta-wrap h1").each(function () {
            var font = $(this).css("font-family"),
                fontsize = $(this).css("font-size"),
                fontstyle = $(this).css("font-style"),
                fontweight = $(this).css("font-weight"),
                lineheight = $(this).css("line-height");
            $(this).parent().parent().find("span.font-family").html(font);
            $(this).parent().parent().find("span.font-size").html(fontsize);
            $(this).parent().parent().find("span.font-style").html(fontstyle);
            $(this).parent().parent().find("span.font-weight").html(fontweight);
            $(this).parent().parent().find("span.line-height").html(lineheight);
        });
    }


    function color_desc() {
        $("#colors .media").each(function () {
            var top_color = $(this).css('backgroundColor'),
                color_hex = rgb2hex(top_color);
            $(this).parent().parent().find("h4").html(color_hex);
        });
    }


    //    bodyFadeIn();
    setTimeout(function () {
        color_desc();
        font_desc();
    }, 500);



    $('a.alpha').click(function () {
        var page_name = $(this).attr('data-page');
        var template_brand = page_name + ".html?brand=" + brand_config;
        $(this).attr("href", template_brand);
    });

    $(window).on("unload", function () {
        $.cookie("dls_config", null);
    });

    $(".brand-select li a").click(function () {
        var brand = $(this).attr('data-brand');
        var current_hash = window.location.hash;
        var new_url = 'index.html?brand=' + brand + current_hash;
        window.location.href = new_url;
    });

    function select_all(el) {
        if (typeof window.getSelection != "undefined" && typeof document.createRange != "undefined") {
            var range = document.createRange();
            range.selectNodeContents(el);
            var sel = window.getSelection();
            sel.removeAllRanges();
            sel.addRange(range);
        } else if (typeof document.selection != "undefined" && typeof document.body.createTextRange != "undefined") {
            var textRange = document.body.createTextRange();
            textRange.moveToElementText(el);
            textRange.select();
        }
    }

    $(function () {
        $("pre.var-code code").hover(function () {
            $(this).parent().append('<div class="tooltip">copy</div>');

            $(this).click(function () {
                $(".tooltip").text("copied!");
                select_all(this);
                document.execCommand("copy");
            })
        }, function () {
            $(".tooltip").remove();
        });
    });


    // Select all links with hashes
    $('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function (event) {
            // On-page links
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
                location.hostname == this.hostname
            ) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 500, function () {
                        // Callback after animation
                        // Must change focus!
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) { // Checking if the target was focused
                            return false;
                        } else {
                            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                            $target.focus(); // Set focus again
                        }
                    });
                }
            }
        });
});
