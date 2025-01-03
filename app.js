function toggleAppBar(id) {
    const appBar = document.getElementById(id);
    if (appBar.style.width === "250px") {
        appBar.style.width = "0";
    } else {
        appBar.style.width = "250px";
    }
}