function validate() {
    var email;
    var pass;
    var regEx;
    email = document.getElementById("inputEmail").value;
    pass = document.getElementById("inputPassword").value;
    regEx = 	
/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    if(regEx.test(email)) {
        document.getElementById("inputEmail").classList.remove("is-invalid");
        document.getElementById("inputEmail").classList.add("is-valid");
    } else {
        document.getElementById("inputEmail").classList.add("is-invalid");
    }
      if(pass.trim() !== "") {
        document.getElementById("inputPassword").classList.add("is-valid");
    } else {
        document.getElementByID("inputPassword").classList.add("is-invalid");
    }
}

 