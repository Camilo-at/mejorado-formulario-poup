const mostrarParte2Button = document.getElementById("mostrarParte2");
const parte1 = document.querySelector(".banner-popup-girbaud-box-parte1");
const parte2 = document.querySelector(".banner-popup-girbaud-box");

mostrarParte2Button.addEventListener("click", () => {
    parte1.classList.add("mostrar-parte-2");
    parte2.style.transform = "translateX(0%)";
    parte2.style.opacity = "1";
});
