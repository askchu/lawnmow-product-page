const more = document.querySelector(".more");
const dropdown = document.querySelector('.dropdown');

more.addEventListener('click', () => {
    dropdown.classList.toggle('open');
});

window.addEventListener('resize', () => {
    dropdown.classList.add('open');
})

const home1 = document.querySelector('#home1');
const home2 = document.querySelector('#home2');
const service1 = document.querySelector('#services1');
const service2 = document.querySelector('#services2');
const about1 = document.querySelector('#about1');
const about2 = document.querySelector('#about2');
const gallery1 = document.querySelector('#gallery1');
const gallery2 = document.querySelector('#gallery2');
const pricing1 = document.querySelector('#pricing1');
const pricing2 = document.querySelector('#pricing2');
const contact1 = document.querySelector('#contact1');
const contact2 = document.querySelector('#contact2');

const serviceContent = document.querySelector('#serviceContent')
const aboutContent = document.querySelector('#aboutContent')
const galleryContent = document.querySelector('#galleryContent')
const pricingContent = document.querySelector('#pricingContent')
const contactForm = document.querySelector('#contactForm')

home1.addEventListener('click', () => {
    window.scroll(0, 0);
})
home2.addEventListener('click', () => {
    window.scroll(0, 0);
    dropdown.classList.toggle('open');
})



service1.addEventListener('click', () => {
    const serviceCord = serviceContent.getBoundingClientRect().top - 100 + window.pageYOffset;
    window.scroll(0, serviceCord);
})
service2.addEventListener('click', () => {
    const serviceCord = serviceContent.getBoundingClientRect().top - 100 + window.pageYOffset;
    window.scroll(0, serviceCord);
    dropdown.classList.toggle('open');
})

about1.addEventListener('click', () => {
    const aboutCord = aboutContent.getBoundingClientRect().top - 100 + window.pageYOffset;
    window.scroll(0, aboutCord);
})

about2.addEventListener('click', () => {
    const aboutCord = aboutContent.getBoundingClientRect().top - 100 + window.pageYOffset;
    window.scroll(0, aboutCord);
    dropdown.classList.toggle('open');
})

gallery1.addEventListener('click', () => {
    const galleryCord = galleryContent.getBoundingClientRect().top - 130 + window.pageYOffset;
    window.scroll(0, galleryCord);
})
gallery2.addEventListener('click', () => {
    const galleryCord = galleryContent.getBoundingClientRect().top - 130 + window.pageYOffset;
    window.scroll(0, galleryCord);
    dropdown.classList.toggle('open');
})

pricing1.addEventListener('click', () => {
    const pricingCord = pricingContent.getBoundingClientRect().top - 100 + window.pageYOffset;
    window.scroll(0, pricingCord);
})
pricing2.addEventListener('click', () => {
    const pricingCord = pricingContent.getBoundingClientRect().top - 100 + window.pageYOffset;
    window.scroll(0, pricingCord);
    dropdown.classList.toggle('open');
})

contact1.addEventListener('click', () => {
    const contactCord = contactForm.getBoundingClientRect().top - 120 + window.pageYOffset;
    window.scroll(0, contactCord);
})
contact2.addEventListener('click', () => {
    const contactCord = contactForm.getBoundingClientRect().top - 135 + window.pageYOffset;
    window.scroll(0, contactCord);
    dropdown.classList.toggle('open');
})

window.addEventListener('scroll', () => {
    const serviceCordTop = serviceContent.getBoundingClientRect().top - 120;
    const serviceCordBot = serviceContent.getBoundingClientRect().bottom - 120;
    const aboutCordTop = aboutContent.getBoundingClientRect().top - 120;
    const aboutCordBot = aboutContent.getBoundingClientRect().bottom - 120;
    const galleryCordTop = galleryContent.getBoundingClientRect().top - 140;
    const galleryCordBot = galleryContent.getBoundingClientRect().bottom - 120;
    const pricingCordTop = pricingContent.getBoundingClientRect().top - 120;
    const pricingCordBot = pricingContent.getBoundingClientRect().bottom - 120;
    const contactCordTop = contactForm.getBoundingClientRect().top - 180;
    const contactCordBot = contactForm.getBoundingClientRect().bottom - 120;
    const y = window.scrollY;


    home1.style.color = "black";
    home2.style.color = "black";
    service1.style.color = "black";
    service2.style.color = "black";
    about1.style.color = "black";
    about2.style.color = "black";
    gallery1.style.color = "black";
    gallery2.style.color = "black";
    pricing1.style.color = "black";
    pricing2.style.color = "black";
    contact1.style.color = "black";
    contact2.style.color = "black";


    if (serviceCordTop > 0) {
        home1.style.color = "#fff"
        home2.style.color = "#fff"
    }

    if (serviceCordTop < 0 && serviceCordBot > 0) {
        service1.style.color = "#fff";
        service2.style.color = "#fff";
    }
    if (aboutCordTop < 0 && aboutCordBot > 0) {
        about1.style.color = "#fff";
        about2.style.color = "#fff";
    }
    if (galleryCordTop < 0 && galleryCordBot > 0) {
        gallery1.style.color = "#fff";
        gallery2.style.color = "#fff";
    }
    if (pricingCordTop < 0 && pricingCordBot > 0) {
        pricing1.style.color = "#fff";
        pricing2.style.color = "#fff";
    }
    if (contactCordTop < 0 && contactCordBot > 0) {
        contact1.style.color = "#fff";
        contact2.style.color = "#fff";
    }

})