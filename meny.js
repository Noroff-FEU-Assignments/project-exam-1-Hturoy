function burgerMeny() {
    const linker = document.querySelector(".linker");
    if (linker.style.display === "block") {
        linker.style.display = "none";
    } else {
        linker.style.display = "block";
    }
}