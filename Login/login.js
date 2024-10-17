

function LoginToSlider() {

    var Erroremail = document.getElementById("Lemail");

    var Errorpassword = document.getElementById("Lpassword");
    
    
    Erroremail.textContent = '';
    Errorpassword.textContent = '';
    
    var checkValid = true;
    //data 
    var Email = document.getElementById("loginEmail").value;

    var checkEmail = localStorage.getItem("Email");

    if (checkEmail !=Email) {
        Erroremail.textContent = 'Email Is Not Valid ';
        
        document.getElementById("loginEmail").value = '';
        checkValid = false;

    }

    var Password = document.getElementById("loginPassword").value;
    var PasswordChick = localStorage.getItem("Password");

    if (PasswordChick != Password) {
        Errorpassword.textContent = 'Password not matched !! ';
        document.getElementById("loginPassword").value = '';
        var checkValid = false;
    }
    if (Password.length == 0) {

        Errorpassword.textContent = 'You Must Enter Password ';
        var checkValid = false;

    }


  

    if (checkValid) {


        open("../home page/index.html", "_blank");
    }
}

function BacktoWelcome() {
    open("../SignUp/SignUp.html", "_blank");
}