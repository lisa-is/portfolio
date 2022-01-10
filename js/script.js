/* Slider */
$(".slider-experience").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    customPaging: function (slider, i) {
        var titre = $(slider.$slides[i]).data('titre');
        return '<button type="button">' + titre + '</button>';
    },
});
$(".slider-projet").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    autoplay: true,

});

/*  Smooth scroll  */
$('a[href^="#"]').click(function () {
    var the_id = $(this).attr("href");

    $('html, body').animate({
        scrollTop: $(the_id).offset().top
    }, 'slow');
    return false;
});

/*  Menu  actif */

// Cache selectors
var topMenu = $(".menu"),
    topMenuHeight = topMenu.outerHeight() + 15,
    // All list items
    menuItems = topMenu.find("a"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function () {
        var item = $($(this).attr("href"));
        if (item.length) {
            return item;
        }
    });

// Bind to scroll
$(window).scroll(function () {
    // Get container scroll position
    var fromTop = $(this).scrollTop() + topMenuHeight;

    // Get id of current scroll item
    var cur = scrollItems.map(function () {
        if ($(this).offset().top < fromTop)
            return this;
    });
    // Get the id of the current element
    cur = cur[cur.length - 1];
    var id = cur && cur.length ? cur[0].id : "";
    // Set/remove active class

    menuItems
        .removeClass("actif")
        .filter("[href='#" + id + "']").addClass("actif");
});

/*  Transition description  */


$(".description")
    .css("display", "flex")
    .hide();

$(".retour").click(function () {
    $(".description").fadeOut("slow", function () {});
});
$("#projet-1").click(function () {
    $('[id^=description]').hide();
    $("#description-1").fadeToggle("slow", function () {});
    if ($(window).width() < 479) {
        $('html, body').animate({
            scrollTop: $("#description-1").offset().top
        }, 2000);
    }
    $('.slider-projet').slick('refresh');
});

$("#projet-2").click(function () {
    $('[id^=description]').hide();
    $("#description-2").fadeToggle("slow", function () {});
    if ($(window).width() < 479) {
        $('html, body').animate({
            scrollTop: $("#description-2").offset().top
        }, 2000);
    }
    $('.slider-projet').slick('refresh');
});

$("#projet-3").click(function () {
    $('[id^=description]').hide();
    $("#description-3").fadeToggle("slow", function () {});
    if ($(window).width() < 479) {
        $('html, body').animate({
            scrollTop: $("#description-3").offset().top
        }, 2000);
    }
    $('.slider-projet').slick('refresh');
});

$("#projet-4").click(function () {
    $('[id^=description]').hide();
    $("#description-4").fadeToggle("slow", function () {});
    if ($(window).width() < 479) {
        $('html, body').animate({
            scrollTop: $("#description-4").offset().top
        }, 2000);
    }
    $('.slider-projet').slick('refresh');

});

$("#projet-5").click(function () {
    $('[id^=description]').hide();
    $("#description-5").fadeToggle("slow", function () {});
    if ($(window).width() < 479) {
        $('html, body').animate({
            scrollTop: $("#description-5").offset().top
        }, 2000);
    }
    $('.slider-projet').slick('refresh');
});

$("#projet-6").click(function () {
    $('[id^=description]').hide();
    $("#description-6").fadeToggle("slow", function () {});
    if ($(window).width() < 479) {
        $('html, body').animate({
            scrollTop: $("#description-6").offset().top
        }, 2000);
    }
    $('.slider-projet').slick('refresh');
});

///*  Animation motif  */
//$("#motif-1 path").each(function () {
//    ranNum = Math.floor((Math.random() * 100) + 1);
//    if (ranNum > 50) {
//        $(this).addClass('mouvement');
//    } else {
//        $(this).addClass('mouvement-2');
//    }
//});
