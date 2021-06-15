const more = document.querySelector(".more");
const dropdown = document.querySelector('.dropdown');

more.addEventListener('click', () => {
    dropdown.classList.toggle('open');
});

window.addEventListener('resize', () => {
    dropdown.classList.add('open');
})