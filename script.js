// Данные атласов
const atlases = [
    {
        title: 'Нацыянальны Атлас Беларусi 2002',
        authors: 'Петр Петров',
        isbn_bel: '9789038210315',
        cover: 'covers/atlas2002.png',
        pdf_bel: 'pdf/atlas2002_bel.pdf',
        pdf_ru: 'monkey.jpg',
    },
    {
        title: 'Нацыянальны Атлас Беларусi 2024',
        authors: 'Иван Иванов',
        isbn_bel: '9789038213446',
        cover: 'covers/atlas2024.png',
        pdf_bel: 'pdf/atlas2024_bel.pdf',
        pdf_ru: 'monkey.jpg',
    }
];

// Функция отрисовки атласов
function renderAtlases() {
    const container = document.getElementById('atlas-list');
    container.innerHTML = ''; // Очистить

    atlases.forEach(atlas => {
        const card = document.createElement('div');
        card.className = 'atlas-card';

        card.innerHTML = `
            <img src="${atlas.cover}" alt="Обложка" class="atlas-cover">
            <div class="atlas-info">
                <h3>${atlas.title}</h3>
                <div class="pdf-links">
                    <a href="${atlas.pdf_bel}" target="_blank" class="pdf-link">PDF BEL</a>
                    <a href="${atlas.pdf_ru}" target="_blank" class="pdf-link">PDF RU</a>
                </div>
                <p class="authors"><strong>Авторы:</strong> ${atlas.authors}</p>
                <p class="isbn"><strong>ISBN:</strong> ${atlas.isbn_bel}</p>
            </div>
        `;

        container.appendChild(card);
    });
}




// Переключение разделов
document.getElementById('home-link').addEventListener('click', () => {
    document.getElementById('home-section').style.display = 'block';
    document.getElementById('atlas-section').style.display = 'none';
});

document.getElementById('atlas-link').addEventListener('click', () => {
    document.getElementById('home-section').style.display = 'none';
    document.getElementById('atlas-section').style.display = 'block';
    renderAtlases(); // Загружаем атласы
});

// Переключение языков
const ruBtn = document.getElementById('ru-btn');
const belBtn = document.getElementById('bel-btn');

ruBtn.addEventListener('click', () => {
    ruBtn.classList.add('active');
    belBtn.classList.remove('active');

    document.getElementById('intro-title').textContent = 'Добро пожаловать';
    document.getElementById('intro-text').textContent =
        'Национальный Атлас — это современный цифровой ресурс, отражающий географические, экономические и культурные особенности Республики Беларусь.';
});

belBtn.addEventListener('click', () => {
    belBtn.classList.add('active');
    ruBtn.classList.remove('active');

    document.getElementById('intro-title').textContent = 'Сардэчна запрашаем';
    document.getElementById('intro-text').textContent =
        'Нацыянальны Атлас — гэта сучасны лічбавы рэсурс, які адлюстроўвае геаграфічныя, эканамічныя і культурныя асаблівасці Рэспублікі Беларусь.';
});
