function validate() {
    var search;
    search = document.getElementById("search");
    
    if(search.length<=3) {
        document.getElementById("search-btn").disabled = true;
    } else {
        document.getElementById("search-btn").disabled = false;
    }
}
