function validate(){
        var firstname_value=$("#firstname").val();
    var firstname_feedback="";
    if(firstname_value.length<4){
        firstname_feedback="firstname must be at least 4 characters long";
        $("#firstname")[0].setCustomValidity(firstname_feedback);
        $("#firstname-feedback").text(firstname_feedback);
    }
    else{
        $("#firstname")[0].setCustomValidity("");
    }
    
    var zip_value=$("#zip").val();
    var zip_feedback= "";
    if(zip_value.length<5){
        zip_feedback =" zip must contain at least 4 digits";
        $("#zip")[0].setCustomValidity(zip_feedback);
        $("#zip-feedback").text(zip_feedback);
    }
    else{
        $("#zip")[0].setCustomValidity("");
    }
    var message_value=$("#message").val();
    var message_feedback= "";
    if(message_value.length<15){
        message_feedback =" message must contain at least 15 characters";
        $("#message")[0].setCustomValidity(message_feedback);
        $("#message-feedback").text(message_feedback);
    }
    else{
        $("#message")[0].setCustomValidity("");
    }
     var phone_value=$("#phone").val();
    var phone_feedback= "";
    if(phone_value.length<12){
        phone_feedback =" phone number must contain 12 digits";
        $("#phone")[0].setCustomValidity(phone_feedback);
        $("#phone-feedback").text(phone_feedback);
    }
    else{
        $("#phone")[0].setCustomValidity("");
    }
    var email_value = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
if(inputText.value.match(email_value))
{
alert("Valid email address!");
document.form1.text1.focus();
return true;
}
else
{
alert("You have entered an invalid email address!");
document.form1.text1.focus();
return false;
}
    

     $("form").addClass("was-validated");
}
   
     
     
     