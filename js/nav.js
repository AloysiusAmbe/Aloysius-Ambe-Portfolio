
window.addEventListener('scroll', function() {
    $('nav').toggleClass('sticky', window.scrollY > 0);
});

// var toggleNav = 0;

// document.querySelector('.responsive-nav').addEventListener('click', async () => {
//     if (toggleNav % 2 === 0)
//         $(".responsive-nav").next().css('display', 'flex');
//     else
//         $(".responsive-nav").next().css('display', 'none');
//     toggleNav++;

//     $('nav').toggleClass('responsive');
// });
