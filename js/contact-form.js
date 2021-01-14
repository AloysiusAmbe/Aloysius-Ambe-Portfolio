
$('#submit-contact-form').click(function () {
    checkInputs(); // Checks the values in the contact field
});

function checkInputs() {
    // Gets the value of the name, email, and message
    const nameVal = $('#name').val().trim();
    const emailVal = $('#email').val().trim();
    const messageVal = $('#message').val().trim();


    // Validates the inputs
    if (nameVal === '') {
        setErrorFor($('#name'), 'Name cannot be blank.', 'input');
    }

    else {
        setSuccessFor($('#name'), 'input');
    }

    if (!(validateEmail(emailVal))) {
        if (emailVal === '') {
            setErrorFor($('#email'), 'Email cannot be blank.', 'input');
        }

        else {
            setErrorFor($('#email'), 'Email is not valid.', 'input');
        }
    }

    else {
        setSuccessFor($('#email'), 'input');
    }

    if (messageVal === '') {
        setErrorFor($('#message'), 'Message cannot be blank.', 'textarea');
    }

    else {
        setSuccessFor($('#message'), 'textarea');
    }
}

function setErrorFor(input, errorMessage, type) {
    const form = input.parent();
    const errorField = form.children('small');

    errorField.text(errorMessage); // Changing the error text
    errorField.css('visibility', 'visible');

    if (type === 'input')
        form.children('input').css('border', '1px solid #e74c3c');

    else
        form.children('textarea').css('border', '1px solid #e74c3c');
    
    form.addClass('form error'); // Making error text visible
}

function setSuccessFor(input, type) {
    const form = input.parent();
    const errorField = form.children('small');

    errorField.css('visibility', 'hidden');

    if (type === 'input')
        form.children('input').css('border', '1px solid #2ecc71');

    else
        form.children('textarea').css('border', '1px solid #2ecc71');

    form.addClass('form success');
}

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}
