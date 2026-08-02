function checkPassword(){

    let password = document.getElementById("password").value;

    if(password === "sivanisasisree"){

        window.location.href="home.html";

    }

    else{

        document.getElementById("message").innerHTML =
        "Oops! Wrong Password 💔 Try Again";

    }

}