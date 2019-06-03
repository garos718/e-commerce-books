function validate() {
    var search;
    search = document.getElementById("search");
    
    if(search.length>3) {
        document.getElementById("search").classList.remove("is-invalid");
        document.getElementById("search").classList.add("is-valid");
    } else {
        document.getElementById("search").classList.remove("is-valid");
        document.getElementById("search").classList.add("is-invalid");
    }
}
