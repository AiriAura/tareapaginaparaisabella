document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".cuento").forEach(cuento => {
        cuento.addEventListener("click", () => {
            const cuentoLink = cuento.getAttribute("data-cuento");
            window.location.href = cuentoLink;
        });
    });
});