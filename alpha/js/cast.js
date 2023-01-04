$( document ).ready(function() {

var $carousels = [];
var flktys = [];

$( ".playlists-container .items-wrap, .photos4-container .items-wrap, .news2-container .items-wrap" ).each(function( index ) {
    $carousels[index] = $(this), flktys[index];
    $carousels[index].flickity({
        cellSelector: '.item',
        contain: true,
        draggable: true,
        percentPosition: false,
        pageDots: false,
        groupCells: true,
        cellAlign: 'center'
    })
        .on('click', 'a', function (e) {
            e.preventDefault();
        })
        .on('staticClick.flickity', function (e, pointer, cellElement) {

            controller.linkHandler.call(controller, e);

        }).on('select.flickity', function () {
        if (flktys[index].nextButton) {
            updateCarouselButtonState(flktys[index].nextButton);
        }
        if (flktys[index].prevButton) {
            updateCarouselButtonState(flktys[index].prevButton);
        }
    });

    flktys[index] = $carousels[index].data('flickity');
    flktys[index].select(0);
    flktys[index].resize();
});




var $carousel = $(".cast-container .items-wrap"), flkty;

$carousel.flickity({
    cellSelector: '.item',
    contain: true,
    draggable: true,
    percentPosition: false,
    pageDots: false,
    groupCells: true,
    cellAlign: 'center'
})
    .on('select.flickity', function () {
        if (flkty.nextButton) {
            updateCarouselButtonState(flkty.nextButton);
        }

        if (flkty.prevButton) {
            updateCarouselButtonState(flkty.prevButton);
        }
    });

flkty = $carousel.data('flickity');
flkty.select(0);

/*
 var $carousel2 = $(".playlists-container .items-wrap"), flkty2;
 $carousel2.flickity({
 cellSelector: '.item',
 contain: true,
 draggable: true,
 percentPosition: false,
 pageDots: false,
 groupCells: true,
 cellAlign: 'center'
 })
 .on('select.flickity', function () {
 if (flkty2.nextButton) {
 updateCarouselButtonState(flkty2.nextButton);
 }
 if (flkty2.prevButton) {
 updateCarouselButtonState(flkty2.prevButton);
 }
 });

 flkty2 = $carousel2.data('flickity');
 flkty2.select(0);
 flkty2.resize();

 */


function updateCarouselButtonState (button) {
    if (!button || !button.element) {
        return;
    }

    button.element.disabled = false;
    if (button.isEnabled) {
        button.element.classList.remove('disabled');
    } else {
        button.element.classList.add('disabled');
    }
}




/*cast*/
var $cast_details_container = $("<div class='detail-container'><div class='item active item-primary clearfix'></div><div class='item item-secondary clearfix'></div><div class='close-wrap'><div class='icon-close'></div></div></div>");
var castInfoIndex = 1;
var castContainerHeight = 348;

$('.cast-container .items-container').after($cast_details_container);

$('.cast-container .items-container .item').click(function (e) {
    var $innerContent = $(this);

    $castActiveContainer =  $(".cast-container .detail-container .item:nth-child(" + castInfoIndex + ")");
    $castActiveContainer.html($innerContent.html());

    resizeCastContainer();

    $castActiveContainer.fadeIn('fast', function() {
        if (castInfoIndex == 1)  castInfoIndex = 2; else castInfoIndex = 1;
        $(".cast-container .detail-container .item:nth-child(" + castInfoIndex + ")").css("display", "none");
        $(".cast-container .detail-container .item").toggleClass("active");
    });

    $(".cast-container .detail-container").show();
    //$(".cast-container .detail-container").slideDown();


    if (!isElementInViewport($(".cast-container .detail-container"))) {
        $('html, body').animate({
            scrollTop: $(".cast-container .detail-container").offset().top - $(window).height() + $(".cast-container .detail-container").height()
        }, 500);
    }
    function isElementInViewport (el) {
        //special bonus for those using jQuery
        if (typeof jQuery === "function" && el instanceof jQuery) {
            el = el[0];
        }
        var rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /*or $(window).height() */
            rect.right <= (window.innerWidth || document.documentElement.clientWidth) /*or $(window).width() */
        );
    }
});

$('.cast-container .detail-container .close-wrap').click(function (e) {
    $(".cast-container .detail-container").slideUp();
});

$( window ).resize(function() {
    resizeCastContainer();
});


function isElementInViewport (el) {
    //special bonus for those using jQuery
    if (typeof jQuery === "function" && el instanceof jQuery) {
        el = el[0];
    }
    var rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /*or $(window).height() */
        rect.right <= (window.innerWidth || document.documentElement.clientWidth) /*or $(window).width() */
    );
}


function resizeCastContainer () {
    if ($( document ).width() < 980 ) {
        castContainerHeight = $castActiveContainer.outerHeight();
        if ($castActiveContainer.outerHeight() < 348) castContainerHeight = 348;
        $(".cast-container .detail-container").css("height", castContainerHeight);
    } else $(".cast-container .detail-container").css("height", "348px");
}

$("header .nav-item").on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top - $("header").outerHeight()
    }, 500);
});

$('.news-container .meta-wrap .header').trimTextToFit();
$('.news-container .meta-wrap .deck').trimTextToFit();
$('.photos-container .meta-wrap .header').trimTextToFit();
$('.playlists-container .meta-wrap .header').trimTextToFit();
/*cast*/

});