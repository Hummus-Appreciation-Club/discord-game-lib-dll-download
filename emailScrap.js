// Email var, java code will check this over and over in a seperate thread
var email = null;

// Repeat 20 times a second until we scrape the email from the microsoft page
var repeat = setInterval(function(){
    var displayEmail = document.getElementById("displayName");
    if (displayEmail != null){
        email = displayEmail.getAttribute("title");
        console.log(email);
        clearInterval(repeat);
    }
}, 50);
