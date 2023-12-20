var nameerror = document.getElementById('name-error')
var phoneerror = document.getElementById('Phone-error')
var emailerror = document.getElementById('email-error')
var messageerror = document.getElementById('message-error')
var submiterror = document.getElementById('subit-error')

function validatename() {
    var name = document.getElementById('contact-name').value;

    if (name.length == 0) {
        nameerror.innerHTML = 'Name is required';
        return false;
    }
    if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
        nameerror.innerHTML = 'Write full name';
        return false;
    }
    nameerror.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validatephone() {
    var phone = document.getElementById('contact-phone').value;

    if (phone.length == 0) {
        phoneerror.innerHTML = 'phone no is required';
        return false;
    }
    if (phone.length !== 10) {
        phoneerror.innerHTML = 'phone no should be 10 digits';
        return false;
    }
    if (!phone.match(/^[0-9]{10}$/)) {
        phoneerror.innerHTML = 'Only digits please.';
        return false;
    }
    phoneerror.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validateemail() {
    var email = document.getElementById('contact-email').value;

    if (email.length == 0) {
        emailerror.innerHTML = 'Email is required'
        return false;
    }

    if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        emailerror.innerHTML = 'Email is Invalid';
        return false;
    }

    emailerror.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
}

function validatemessage() {
    var message = document.getElementById('contact-message').value;
    var required = 30;
    var left = required - message.length;

    if (left > 0) {
        messageerror.innerHTML = left + 'more charector required';
        return false;
    }
    messageerror.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validateform() {
    if (!validatename() || !validatephone() || !validateemail() || !validatemessage()) {
        submiterror.style.display = 'block';
        submiterror.innerHTML = 'Please fix error to submit';
        setTimeout(function () {submiterror.style.display = 'none' ;}, 3000);
        return false;
    }
}