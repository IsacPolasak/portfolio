document.addEventListener("DOMContentLoaded", function () {
    const burger = document.getElementById("burger");
    const nav = document.querySelector(".header-right");
    burger.addEventListener("click", function () {
        nav.classList.toggle("active");
    });
});


