//Hill Stations Part

const hillStationsButton = document.getElementById('hillStationsButton');
const hillStationsModal = document.getElementById('hillStationsModal');

hillStationsButton.addEventListener('click', (e) => {
    e.preventDefault();
    hillStationsModal.style.display = 'flex';
});

hillStationsModal.addEventListener('click', (e) => {
    if (e.target === hillStationsModal) {
        hillStationsModal.style.display = 'none';
    }
});


// About Us Part

const aboutUsButton = document.getElementById('aboutUsButton');
const aboutUsModal = document.getElementById('aboutUsModal');

aboutUsButton.addEventListener('click', (e) => {
    e.preventDefault();
    aboutUsModal.style.display = 'flex';
});

aboutUsModal.addEventListener('click', (e) => {
    if (e.target === aboutUsModal) {
        aboutUsModal.style.display = 'none';
    }
});


// Gallery Part
const galleryButton = document.getElementById('galleryButton');
const galleryModal = document.getElementById('galleryModal');

galleryButton.addEventListener('click', (e) => {
    e.preventDefault();
    galleryModal.style.display = 'flex';
});

galleryModal.addEventListener('click', (e) => {
    if (e.target === galleryModal) {
        galleryModal.style.display = 'none';
    }
});


// Countdown Timer Part
function updateCountdown() {
    const deadline = new Date("2025-01-31T23:59:59Z"); // Offer end date (adjust accordingly)
    const now = new Date();
    const timeRemaining = deadline - now;

    if (timeRemaining > 0) {
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        document.getElementById("countdown").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    } else {
        document.getElementById("countdown").innerHTML = "Offer Expired";
    }
}

setInterval(updateCountdown, 1000);


// Best Offers Part
const bestOffersButton = document.getElementById('bestOffersButton');
const bestOffersModal = document.getElementById('bestOffersModal');

bestOffersButton.addEventListener('click', (e) => {
    e.preventDefault();
    bestOffersModal.style.display = 'flex';
});

bestOffersModal.addEventListener('click', (e) => {
    if (e.target === bestOffersModal) {
        bestOffersModal.style.display = 'none';
    }
});


// Contact Us Part
const contactUsButton = document.querySelector('a[href="#"]:nth-child(6)');
const contactUsModal = document.getElementById('contactUsModal');

contactUsButton.addEventListener('click', (e) => {
    e.preventDefault();
    contactUsModal.style.display = 'flex';
});

contactUsModal.addEventListener('click', (e) => {
    if (e.target === contactUsModal) {
        contactUsModal.style.display = 'none';
    }
});


// Login Part
const loginButton = document.getElementById('loginButton');
const loginModal = document.getElementById('loginModal');

loginButton.addEventListener('click', (e) => {
    e.preventDefault();
    loginModal.style.display = 'flex';
});

loginModal.addEventListener('click', (e) => {
    if (e.target === loginModal) {
        loginModal.style.display = 'none';
    }
});

