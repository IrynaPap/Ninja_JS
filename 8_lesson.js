1.
$('ul.navbar-collapse>li:not(.dropdown)').hide()

2.
var mass = $('.single-widget>h2');

$('.single-widget>ul').filter(function (i) {
    if ($(mass[i]).text() == "Quock Shop" || $(mass[i]).text() == "Policies") {

        return $('.single-widget>ul')[i];

    }
})//видно не будет.find('li:even').css("color","red")
//будет видно
.find('a:even').css("color","red")


3.
var el = document.getElementsByClassName('contactinfo')
var lin = el[0].getElementsByTagName('a')
lin[0].innerText='1 (111) 111 11 11'


4.
$('li[data-target="#slider-carousel"]:not([data-slide-to="1"])').removeClass("active")

5.
$(":header").css("color","green")

