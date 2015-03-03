 var myDataRef = new Firebase('https://coc-calc-contact.firebaseio.com/');
 var name = "";
 var email = "";
 var message = "";

 function submitFirebase () {
    myDataRef.push({
        name: name,
        email: email,
        message: message
        });
}

function contactSubmit () {
    name = $('#contact-name').val();
    email = $('#contact-email').val();
    message = $('#contact-message').val();
    submitFirebase();
    $('#contact-name').val('');
    $('#contact-email').val('');
    $('#contact-message').val('');
    alertify.log("Thank you, " + name + ", for your message!");
}