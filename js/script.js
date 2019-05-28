(function ($) {

    "use strict";

    //Hide Loading Box (Preloader)
    function handlePreloader() {
        if ($('.preloader').length) {
            $('.preloader').delay(5000).fadeOut(2500);
        }
    }

    //Update Header Style and Scroll to Top
    function headerStyle() {
        if ($('.main-header').length) {
            var windowpos = $(window).scrollTop();
            var siteHeader = $('.main-header');
            var scrollLink = $('.scroll-to-top');
            if (windowpos >= 200) {
                siteHeader.addClass('fixed-header');
                scrollLink.fadeIn(300);
            } else {
                siteHeader.removeClass('fixed-header');
                scrollLink.fadeOut(300);
            }
        }
    }

    headerStyle();

    //Submenu Dropdown Toggle
    if ($('.main-header li.dropdown ul').length) {
        $('.main-header li.dropdown').append('<div class="dropdown-btn"></div>');

        //Dropdown Button
        $('.main-header li.dropdown .dropdown-btn').on('click', function () {
            $(this).prev('ul').slideToggle(500);
        });

        //Disable dropdown parent link
        $('.main-header .navigation li.dropdown > a, .side-menu li.dropdown > a').on('click', function (e) {
            e.preventDefault();
        });
    }

    //LightBox / Fancybox
    if ($('.lightbox-image').length) {
        $('.lightbox-image').fancybox({
            openEffect: 'fade',
            closeEffect: 'fade',
            helpers: {
                media: {}
            }
        });
    }

    //Revolution Slider
    if ($('.main-slider .tp-banner').length) {

        jQuery('.main-slider .tp-banner').show().revolution({
            dottedOverlay: "yes",
            delay: 15000,
            startwidth: 1200,
            startheight: 680,
            hideThumbs: 600,

            thumbWidth: 80,
            thumbHeight: 50,
            thumbAmount: 5,

            navigationType: "bullet",
            navigationArrows: "0",
            navigationStyle: "preview3",

            touchenabled: "on",
            onHoverStop: "off",

            swipe_velocity: 0.7,
            swipe_min_touches: 1,
            swipe_max_touches: 1,
            drag_block_vertical: false,

            parallax: "mouse",
            parallaxBgFreeze: "on",
            parallaxLevels: [7, 4, 3, 2, 5, 4, 3, 2, 1, 0],

            keyboardNavigation: "on",

            navigationHAlign: "center",
            navigationVAlign: "bottom",
            navigationHOffset: 0,
            navigationVOffset: 30,

            soloArrowLeftHalign: "left",
            soloArrowLeftValign: "center",
            soloArrowLeftHOffset: 20,
            soloArrowLeftVOffset: 0,

            soloArrowRightHalign: "right",
            soloArrowRightValign: "center",
            soloArrowRightHOffset: 20,
            soloArrowRightVOffset: 0,

            shadow: 0,
            fullWidth: "on",
            fullScreen: "off",

            spinner: "spinner1",

            stopLoop: "off",
            stopAfterLoops: -1,
            stopAtSlide: -1,

            shuffle: "off",

            autoHeight: "off",
            forceFullWidth: "off",

            hideThumbsOnMobile: "on",
            hideNavDelayOnMobile: 1500,
            hideBulletsOnMobile: "on",
            hideArrowsOnMobile: "on",
            hideThumbsUnderResolution: 0,

            hideSliderAtLimit: 0,
            hideCaptionAtLimit: 0,
            hideAllCaptionAtLilmit: 0,
            startWithSlide: 0,
            videoJsPath: "",
            fullScreenOffsetContainer: ""
        });
    }

    //Mixitup Gallery
    if ($('.filter-list').length) {
        $('.filter-list').mixItUp({});
    }

    //Carousel
    if ($('.single-item-carousel').length) {
        $('.single-item-carousel').owlCarousel({
            loop: true,
            margin: 40,
            nav: false,
            smartSpeed: 500,
            autoplay: 5000,
            navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                800: {
                    items: 1
                },
                1024: {
                    items: 1
                },
                1200: {
                    items: 1
                }
            }
        });
    }

    //Food Carousel
    if ($('.food-carousel').length) {
        $('.food-carousel').owlCarousel({
            loop: true,
            nav: false,
            smartSpeed: 500,
            autoplay: 5000,
            navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                800: {
                    items: 3
                },
                1024: {
                    items: 4
                },
                1200: {
                    items: 4
                }
            }
        });
    }

    // Economic Counter
    function EconomicCounter() {
        if ($('.economic-counter').length) {
            $('.economic-counter .counter-column.animated').each(function () {
                var $t = $(this),
                    n = $t.find(".count-text").attr("data-stop"),
                    r = parseInt($t.find(".count-text").attr("data-speed"), 10);

                if (!$t.hasClass("counted")) {
                    $t.addClass("counted");
                    $({
                        countNum: $t.find(".count-text").text()
                    }).animate({
                        countNum: n
                    }, {
                        duration: r,
                        easing: "linear",
                        step: function () {
                            $t.find(".count-text").text(Math.floor(this.countNum));
                        },
                        complete: function () {
                            $t.find(".count-text").text(this.countNum);
                        }
                    });
                }

            });
        }
    }


    //Progress Bar
    if ($('.progress-box .bar-fill').length) {
        $(".progress-box .bar-fill").each(function () {
            var progressWidth = $(this).attr('data-percent');
            $(this).css('height', progressWidth + '%');
            $(this).children('.percent').html(progressWidth + '%');
        });
    }

    //Add Scroll Page nav / One Page Nav to Home Page Three
    if ($('.scroll-nav').length) {
        $('.scroll-nav ul').onePageNav();
        $('.popup-navigation ul.navigation').onePageNav();
    }

    // Scroll to a Specific Div
    if ($('.scroll-to-target').length) {
        $(".scroll-to-target").on('click', function () {
            var target = $(this).attr('data-target');
            // animate
            $('html, body').animate({
                scrollTop: $(target).offset().top
            }, 1500);
        });
    }

    //BBS Form Validation
    function validform() {
        return $('#bbs-form').validate({
            rules: {
                username: {
                    required: true,
                    maxlength: 20
                },
                message: {
                    required: true,
                    maxlength: 100
                }
            },
            messages: {
                username: {
                    required: "请输入你的名字",
                    maxlength: "请输入不超过20个字符"
                },
                message: {
                    required: "请输入你的留言",
                    maxlength: "请输入不超过100个字符"
                }
            }
        });
    }
    $(validform());

    $("#addBut").click(function () {
        if (validform().form())
            add_message();
    });
    $("#removeBut").click(function () {
        remove_message();
    });
    $("#selectAllBut").click(function () {
        select_all();
    });
    $("#deselectAllBut").click(function () {
        deselect_all();
    });
    $("#removeAllBut").click(function () {
        select_all();
        remove_message();
    });


    // Elements Animation
    if ($('.wow').length) {
        var wow = new WOW(
            {
                boxClass: 'wow',      // animated element css class (default is wow)
                animateClass: 'animated', // animation css class (default is animated)
                offset: 0,          // distance to the element when triggering the animation (default is 0)
                mobile: true,       // trigger animations on mobile devices (default is true)
                live: true       // act on asynchronously loaded content (default is true)
            }
        );
        wow.init();
    }


    /* ==========================================================================
       When document is Scrollig, do
       ========================================================================== */

    $(window).on('scroll', function () {
        headerStyle();
        EconomicCounter();
    });

    /* ==========================================================================
       When document is loading, do
       ========================================================================== */

    $(window).on('load', function () {
        handlePreloader();
        getCookie();
    });

})(window.jQuery);

var number = 0;
var elements = [];

function add_message() {
    var username = $("username");
    var message = $("message");
    var date = new Date().toString();
    var text = username.value.trim() + ": " + message.value.trim();
    var li = document.createElement("li");
    li.setAttribute("id", "li" + number);
    li.setAttribute("class", "wow fadeInUp");
    var checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("id", "checkbox-" + number);
    li.appendChild(checkbox);
    var label = document.createElement("label");
    label.setAttribute("for", "checkbox-" + number);
    li.appendChild(label);
    var div = document.createElement("div");
    div.setAttribute("class", "li_text");
    div.append(date);
    var br = document.createElement("br");
    div.appendChild(br);
    div.append(text);
    li.appendChild(div);
    $("list").appendChild(li);
    elements.push(number.toString());
    number++;
    username.value = "";
    message.value = "";
    setCookie();
}

function remove_message() {
    for (var i = 0; i < elements.length; i++) {
        var elem = $("li" + elements[i]);
        if (elem.firstChild.checked === true) {
            elem.remove();
            elements.splice(i, 1);
            i--;
        }
    }
    setCookie();
}

function select_all() {
    for (var i = 0; i < elements.length; i++) {
        $("li" + elements[i]).firstChild.checked = true;
    }
}

function deselect_all() {
    for (var i = 0; i < elements.length; i++) {
        $("li" + elements[i]).firstChild.checked = false;
    }
}

function setCookie() {
    var to_do = "to_do=";
    for (var i = 0; i < elements.length; i++) {
        var text = $("li" + elements[i]).childNodes[2].innerHTML;
        to_do += text + ",";
    }
    if (elements.length !== 0)
        to_do = to_do.slice(0, to_do.length - 1);
    document.cookie = escape(to_do);
}

function getCookie() {
    var to_do = unescape(document.cookie).split(';')[0];
    if (to_do.slice(0, 5) === "to_do" && to_do.length > 6) {
        var temp = to_do.split('=')[1].split(",");
        for (var i = 0; i < temp.length; i++) {
            var message = temp[i].split("<br>");
            var date = message[0];
            var text = message[1];
            var li = document.createElement("li");
            li.setAttribute("id", "li" + number);
            li.setAttribute("class", "wow fadeInUp");
            var checkbox = document.createElement("input");
            checkbox.setAttribute("type", "checkbox");
            checkbox.setAttribute("id", "checkbox-" + number);
            li.appendChild(checkbox);
            var label = document.createElement("label");
            label.setAttribute("for", "checkbox-" + number);
            li.appendChild(label);
            var div = document.createElement("div");
            div.setAttribute("class", "li_text");
            div.append(date);
            var br = document.createElement("br");
            div.appendChild(br);
            div.append(text);
            li.appendChild(div);
            $("list").appendChild(li);
            elements.push(number.toString());
            number++;
        }
    }
}

