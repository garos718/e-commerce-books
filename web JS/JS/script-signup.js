function validate() {
    var email;
    var pass;
    var passConfirm;
    var regEx;
    email = document.getElementById("inputEmail").value;
    pass = document.getElementById("inputPassword").value;
    passConfirm = document.getElementById("confirmPassword").value;
    regEx = 	
/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    if(regEx.test(email)) {
        document.getElementById("inputEmail").classList.remove("is-invalid");
        document.getElementById("inputEmail").classList.add("is-valid");
        document.getElementById("emailHelpBlock").classList.add("d-none");
    } else {
        document.getElementById("inputEmail").classList.add("is-invalid");
        document.getElementById("emailHelpBlock").classList.remove("d-none");
    }
    if(pass.trim() !== "") {
        document.getElementById("inputPassword").classList.add("is-valid");
        document.getElementById("passHelpBlock").classList.add("d-none");
    } else {
        document.getElementByID("inputPassword").classList.add("is-invalid");
        document.getElementById("passHelpBlock").classList.remove("d-none");
    }
    if(pass == passConfirm) {
        document.getElementById("confirmPassword").classList.remove("is-invalid");
        document.getElementById("confirmPassword").classList.add("is-valid");
        document.getElementById("passConfirmHelpBlock").classList.add("d-none");
    } else {
        document.getElementById("confirmPassword").classList.add("is-invalid");
        document.getElementById("passConfirmHelpBlock").classList.remove("d-none");
    }
}

function validateSearch() {
    var search = document.getElementById("search").value;
    
    if(search.length>3) {
        document.getElementById("search-btn").disabled = false;
    } else {
        document.getElementById("search-btn").disabled = true;
    }
}
