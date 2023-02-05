function verifyPassword() {
    var pw = document.getElementById("password").value;

    console.log(pw);


    if (pw == "") {
        alert("**Jepni passwordin ju lutem");
        return false;
    }


    if (pw.length < 8) {
        alert("**Passwordi duhet gjithsesi te permbaje 8 karaktere");
        return false;
    }


    if (pw.length > 15) {
        alert("**Gjatesia e passwordin nuk duhet te jete me e madhe se 15");
        return false;
    } else {
        return true;
    }
}

const myTimeout = setTimeout(myGreeting, 1000);

function myGreeting() {
    var dt = new Date();
    document.getElementById("time").innerHTML = "<mark><span id='date-time'></span></mark>.";
    document.getElementById('date-time').innerHTML = dt;
    $("#time").addClass("date-time");
    $(".date-time").prepend("Koha e tanishme është: ")

}

window.onload = function () {

    const input = document.querySelector("#firstName");

    input.addEventListener('input', checkTheString);
}

function checkTheString(e) {
    const valuee = e.target.value;
    console.log(valuee);
    try {
        if (/\d/.test(valuee)) {
            // displayWarning(
            //     "Please use lowercase letters only.\n"
            //   );
            $("#alertContent").html("<strong>Kujdes!</strong> Karakteri që keni shënuar është numër.");
            $('#myAlert').show();
        }
    }
    catch (e) {
        console.log(e);
    }

}



