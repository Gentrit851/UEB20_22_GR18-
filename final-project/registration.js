function verifyPassword() {
    var pw = document.getElementById("password").value;
    console.log(pw);

    //check empty password field  
    if (pw == "") {
        alert( "**Jepni passwordin ju lutem");
        return false;
    }

    //minimum password length validation  
    if (pw.length < 8) {
        alert("**Passwordi duhet gjithsesi te permbaje 8 karaktere");
        return false;
    }

    //maximum length of password validation  
    if (pw.length > 15) {
        alert("**Gjatesia e passwordin nuk duhet te jete me e madhe se 15");
        return false;
    } else {
        
    }
}  
