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
     
   
   var email_value=$("#email").val();
   var email_feedback= "";
   var mailformat = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if(email_value.match(mailformat))  
    {
        $("#email")[0].setCustomValidity("");
    } 
    else{ 
        email_feedback =" email must contain valid domain name";
        $("#email")[0].setCustomValidity(email_feedback);
        $("#email-feedback").text(email_feedback);
    }
    
      $("form").addClass("was-validated");
}
   
    


   
     
     
     