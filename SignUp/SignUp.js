
var date = new Date()
date.setDate(date.getDate() + 30);

function SubmitData() {
    var ErrorName = document.getElementById("Vname");
    var Erroremail = document.getElementById("Vemail");
    var Errorpassword = document.getElementById("Vpassword");
    var ErrorConfirmpassword = document.getElementById("CVpassword");
    var Errorgender = document.getElementById("Vgender");

    var Errorcountry = document.getElementById("Vcountry");




    ErrorName.textContent = '';
    Erroremail.textContent = '';
    Errorpassword.textContent = '';
    ErrorConfirmpassword.textContent = '';
    Errorgender.textContent = '';
    Errorcountry.textContent = '';

    var checkValid = true;

    //data 
    var name = document.getElementById("Iname").value;
    if (name === '') {
        ErrorName.textContent = 'Name Is Required';
        checkValid = false;

    }

    if (name.length < 3) {
        ErrorName.textContent = 'Name Should be 3 chart or More ';
        checkValid = false;
    }

    var Email = document.getElementById("Iemail").value;

    var checkEmail = Email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/);

    if (checkEmail == null) {
        Erroremail.textContent = 'Email Is Not Valid ';
        checkValid = false;

    }

    var Password = document.getElementById("Ipassword").value;
    var PasswordChick = Password.match(/^(?=.*[a-z])(?=.*[A-Z]).{6,}$/);

    if (PasswordChick == null) {
        Errorpassword.textContent = 'Password Must be at least 8 includes Capital and small Letter ';
        var checkValid = false;
    }
    if (Password.length == 0) {

        Errorpassword.textContent = 'You Must Enter Password ';
        var checkValid = false;

    }


    var ConfirmPassword = document.getElementById("Cpassword").value;
    if (ConfirmPassword != Password) {
        ErrorConfirmpassword.textContent = 'Password Not Matched ';
        var checkValid = false;

    }
    if (ConfirmPassword.length == 0) {
        ErrorConfirmpassword.textContent = 'Re-inter Your Password';
        var checkValid = false;
    }
    var Male = document.getElementById("male").checked;
    var Female = document.getElementById("female").checked;
    if (Male === false && Female === false) {
        Errorgender.textContent = 'Please Select Your Gender ';
        var checkValid = false;

    }
    var Gender;
    if (Male) {
        Gender = "Male";
    }
    if (Female) {
        Gender = "Female";
    }


    var Country = document.getElementById("CountrySelector").value;
    if (Country == "") {
        console.log("Hassonnaaa");
        Errorcountry.textContent = 'Please Select Your Country ';


    }

    if (checkValid) {


        localStorage.setItem('username', name);

        localStorage.setItem("Email", Email);

        localStorage.setItem("Password", Password);

        localStorage.setItem("Gender", Gender);

        localStorage.setItem("Country", Country);

        localStorage.setItem("MyCaed", 0);
        
        localStorage.setItem("Items" , []);
        
        ResetData();

        alert('Login data saved to local storage');

        window.location.href = '../home page/index.html';
        
        

    }

}
function ResetData() {

    var ErrorName = document.getElementById("Vname");
    var Erroremail = document.getElementById("Vemail");
    var Errorpassword = document.getElementById("Vpassword");
    var Errorgender = document.getElementById("Vgender");
    var ErrorConfirmpassword = document.getElementById("CVpassword");
    
    var Errorcountry = document.getElementById("Vcountry");

    
    ErrorConfirmpassword.textContent = '';
    ErrorName.textContent = '';
    Erroremail.textContent = '';
    Errorpassword.textContent = '';
    Errorgender.textContent = '';
    
    Errorcountry.textContent = '';

    document.getElementById("Iname").value = '';


    document.getElementById("Iemail").value = '';


    document.getElementById("Ipassword").value = '';

    document.getElementById("Cpassword").value = '';


    document.getElementById("male").checked = false;
    document.getElementById("female").checked = false;

    var Sports = document.querySelectorAll('input[name="chName"]:checked');
    for (var i = 0; i < Sports.length; i++) {
        Sports[i].checked = false;
    }


}


function  Back() {
    open("../Login/login.html" , "_blank");
}

// http://127.0.0.1:5500/Welcome.html