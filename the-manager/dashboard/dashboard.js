//import Pool from 'pg'
//require('dotenv').config()

function checkAuth() {
    //const password = process.env.access_password
    //assert(password)
    var errors = ""

    const login_password = document.getElementById('password')
    const login_label = document.getElementById('submit_label')
    const error_label = document.getElementById('error_text')

    if (login_password.value == 'test') {
        // Correct password
        login_password.style = "background-color: green;";
        document.location.href = "index.html?access_key=" + "test";
    }
    else if (login_password.value == '') {
        //Empty password
        login_password.style = "background-color: red;";
        login_label.style = "color: red";
        login_label.innerText = "Enter a password.";
        errors += "Error in password field: This field is required.\n";
    }
    else {
        login_password.style = "background-color: red;";
        login_password.value = "";
        login_label.innerText = "Incorrect password.";
        errors += "Error in password field: Incorrect password.\n";
    }
    if (errors = "") {
        return true;
    }
    else {
        error_label.innerText = errors
    }
    return false;
}

function checkCurrentSiteAuth() {
    const page_url = new URL(window.location.toLocaleString());
    const params = page_url.searchParams

    if(params.get('access_key') == 'test'){
        return true;
    }
    else{
        window.alert("Unauthorized session. Returning.")
        document.location.href = "login.html"
    }
}

function clearErrors() {
    const login_password = document.getElementById('password')
    const login_label = document.getElementById('submit_label')
    const error_label = document.getElementById('error_text')


    login_label.style = "background-color: default;";
    login_label.innerText = "Enter your password"
    login_password.style = "color: default;";
}