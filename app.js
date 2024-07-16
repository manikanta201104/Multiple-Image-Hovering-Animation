document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll(".element");

    elements.forEach(function(val) {
        const img = val.querySelector("img");

        val.addEventListener("mouseenter", function() {
            img.style.opacity = 1;
        });

        val.addEventListener("mouseleave", function() {
            img.style.opacity = 0;
        });

        val.addEventListener("mousemove", function(dets) {
            const rect = val.getBoundingClientRect();
            img.style.left = (dets.clientX - rect.left) + "px";
            img.style.top = (dets.clientY - rect.top) + "px";
        });
    });
});
