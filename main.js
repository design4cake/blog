const current = document.querySelector("#current");
const imgs = document.querySelectorAll(".imgs img");
const opacity = 0.6;

imgs.forEach(img => {
    img.addEventListener('click', e => {
        current.src = e.target.src;
    });
})

imgs.forEach(img => {
    img.addEventListener('click', e => {
        // imgs.forEach(img => img.style.opacity = 1);
        current.src = e.target.src;
        // current.classList.add('fade-in');
        // setTimeout(() => current.classList.remove('fade-in'), 500);
        // event.target.style.opacity = opacity;
    });
})