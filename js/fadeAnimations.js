
// Displays contact page
document.querySelector('#contact-link').addEventListener('click', async () => {
    // Hides all elements except the contact page
    $('main').removeClass('show');
    $('main').addClass('fade-out');

    $('#about').removeClass('show');
    $('#about').addClass('fade-out');
    await sleep(400);
    $('main').addClass('hide');
    $('#about').addClass('hide');

    // Shows contact form
    $('#contact-section').removeClass('hide');
    $('#contact-section').addClass('show');
    $('#contact-section').removeClass('fade-out');

    $('nav').css('position', 'absolute');
});

// Displays projects page
document.querySelector('#project-link').addEventListener('click', async () => {
    // Hides all elements except the projects page
    $('#contact-section').addClass('fade-out');
    $('#about').addClass('fade-out');
    await sleep(400);
    $('#contact-section').removeClass('show');
    $('#about').removeClass('show');
    $('#contact-section').addClass('hide');
    $('#about').addClass('hide');

    // Shows projects page
    $('main').removeClass('hide');
    $('main').removeClass('fade-out');
    $('main').addClass('show');

    $('nav').css('position', 'relative');
});

// Displays about me page
document.querySelector('#about-link').addEventListener('click', async () => {
    // Hides all elements except the about me page
    $('#contact-section').addClass('fade-out');
    $('main').addClass('fade-out');
    await sleep(400);
    $('#contact-section').removeClass('show');
    $('main').removeClass('show');
    $('#contact-section').addClass('hide');
    $('main').addClass('hide');

    // Shows about me page
    $('#about').removeClass('hide');
    $('#about').removeClass('fade-out');
    $('#about').addClass('show');

    $('nav').css('position', 'relative');
});

// Delays the program
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
