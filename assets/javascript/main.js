// Initialize Firebase

var config = {
apiKey: "AIzaSyDtVevVdijIHWzD0--8PiT5LSMPGev5fG0",
authDomain: "my-portfolio-fc2bf.firebaseapp.com",
databaseURL: "https://my-portfolio-fc2bf.firebaseio.com",
projectId: "my-portfolio-fc2bf",
storageBucket: "my-portfolio-fc2bf.appspot.com",
messagingSenderId: "868734116296"
};
firebase.initializeApp(config);

var database = firebase.database()

$(document).ready(function(){ 
console.log("ready!");

$("#contactSubmit").on("click", function (event){
    event.preventDefault();
    var contactName = $("#nameInput").val().trim();
    var contactEmail = $("#emailInput").val().trim();
    var contactMessage = $("#messageInput").val().trim()

    console.log(contactName);
    console.log(contactEmail);
    console.log(contactMessage);
    
    database.ref().push({
        name: contactName,
        email: contactEmail,
        message: contactMessage,
    });

    $("form").trigger("reset")
})
});