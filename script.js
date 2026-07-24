const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    if (document.body.classList.contains('dark-theme')) {
        themeToggle.textContent = 'Light Mode';
    } else {
        themeToggle.textContent = 'Dark Mode';
    }
});

const filterBtns = document.querySelectorAll('.filter-btn');
const cards = document.querySelectorAll('.card');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelector('.filter-btn.active').classList.remove('active');
        btn.classList.add('active');

        const filterValue = btn.getAttribute('data-filter');
        cards.forEach(card => {
            if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

const modal = document.getElementById('detail-modal');
const closeModal = document.querySelector('.close-btn');
const modalTitle = document.getElementById('modal-title');
const modalText = document.getElementById('modal-text');

const venueDetails = {
    'Midtown Food Scene': 'Sacramento is the farm-to-fork capital. Midtown offers a dense grid of patio dining, craft breweries, coffee houses, and local upscale bistros.',
    'William Land Park': 'Spanning 160 acres, this central park features the Sacramento Zoo, Fairytale Town, a golf course, and multiple jogging paths under mature trees.',
    'Old Sacramento Waterfront': 'A registered national historic landmark featuring cobblestone streets, 19th-century gold rush buildings, excursion boats, and historical museums.'
};

document.querySelectorAll('.card-btn').forEach(button => {
    button.addEventListener('click', (e) => {
        const cardBody = e.target.parentElement;
        const currentTitle = cardBody.querySelector('h3').textContent;
        modalTitle.textContent = currentTitle;
        modalText.textContent = venueDetails[currentTitle] || 'More details coming soon!';
        modal.style.display = 'flex';
    });
});

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});
