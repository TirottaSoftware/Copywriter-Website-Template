const spinner = document.querySelector(".loading-spinner");
window.addEventListener("load", () => {
    spinner.style.opacity = 0;
    spinner.style.zIndex = -99;
    window.scrollTo(0, 0)
});