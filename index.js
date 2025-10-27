

/// CARD - IMAGE

const thumbs = document.querySelectorAll(".thumb");
const mainImage = document.getElementById("mainImage");

thumbs.forEach((thumb) => {
    thumb.addEventListener("click", () => {
        mainImage.src = thumb.src;

        thumbs.forEach((t) => t.classList.remove("active-thumb"));
        thumb.classList.add("active-thumb");
    });
});







