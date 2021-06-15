const more = document.querySelector(".more");
const dropdown = document.querySelector('.dropdown');
let opened = false;

more.addEventListener('click', () => {
    dropdown.classList.toggle('open');
})
