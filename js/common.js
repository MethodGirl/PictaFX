$(function () {

    $(".hamburger").click(function () {
        $(this).toggleClass("is-active");

        if ($(this).hasClass("is-active")) {
            $(".main-nav__list").slideDown(300);
        } else {
            $(".main-nav__list").slideUp(300);
        }
    }
    
    )});



