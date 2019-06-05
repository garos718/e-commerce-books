function validateSearch() {
    var search = document.getElementById("search").value;
    
    if(search.length>3) {
        document.getElementById("search-btn").disabled = false;
    } else {
        document.getElementById("search-btn").disabled = true;
    }
}
