const mobileBtn = document.getElementById("mobile-btn");
const mobileMenu = document.getElementById("mobile");
const closeBtn = document.getElementById("close-btn");

// Open menu
mobileBtn.addEventListener("click", function () {
    mobileMenu.classList.remove("hidden");
});

// Close menu
closeBtn.addEventListener("click", function () {
    mobileMenu.classList.add("hidden");
});