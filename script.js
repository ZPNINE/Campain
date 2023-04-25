function activeShowPage() {
    let content = setTimeout(showPage, 2000)
}


function showPage() {
    document.getElementById ('preloader').style.display = "none";
    document.getElementById ('pagecontent').style.display = "block";
}