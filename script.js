document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menuToggle");
    const menu = document.getElementById("menu");

    function checkScreenSize() {
        if (window.innerWidth > 768) {
            menu.classList.remove("open"); // Закрываем меню
        }
    }

    menuToggle.addEventListener("click", function () {
        menu.classList.toggle("open");
        menuToggle.classList.toggle("open");
    });

    // Проверяем размер экрана при загрузке и изменении размера
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
});



document.getElementById("buyTab").addEventListener("click", function() {
    document.getElementById("buyTab").classList.add("active");
    document.getElementById("sellTab").classList.remove("active");
});

document.getElementById("sellTab").addEventListener("click", function() {
    document.getElementById("sellTab").classList.add("active");
    document.getElementById("buyTab").classList.remove("active");
});