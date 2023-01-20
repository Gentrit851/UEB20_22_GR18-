function verifyPassword() {
    var pw = document.getElementById("password").value;
    console.log(pw);

    //check empty password field  
    if (pw == "") {
        alert( "**Fill the password please!");
        return false;
    }

    //minimum password length validation  
    if (pw.length < 8) {
        alert("**Password length must be atleast 8 characters");
        return false;
    }

    //maximum length of password validation  
    if (pw.length > 15) {
        alert("**Password length must not exceed 15 characters");
        return false;
    } else {
        
    }
}  