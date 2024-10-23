/*- user-panel -*/
document.addEventListener('DOMContentLoaded', function() {
    const userPanelCol = document.querySelector('.user-panel__col');
    const userPanelDropdown = document.querySelector('.user-panel__dropdown');

    // Функция для переключения классов
    function togglePanel() {
        userPanelCol.classList.toggle('open');
        userPanelDropdown.classList.toggle('show');
    }

    // Функция для удаления классов
    function closePanel() {
        userPanelCol.classList.remove('open');
        userPanelDropdown.classList.remove('show');
    }

    // Обработчик клика на user-panel__col
    userPanelCol.addEventListener('click', function(event) {
        event.stopPropagation();  // Останавливаем всплытие события, чтобы не вызвать закрытие при клике на саму панель
        togglePanel();
    });

    // Обработчик клика на свободную область (document)
    document.addEventListener('click', function(event) {
        // Если клик не по панели, закрываем панель
        if (!userPanelCol.contains(event.target) && !userPanelDropdown.contains(event.target)) {
            closePanel();
        }
    });
});

/*- language -*/
document.addEventListener('DOMContentLoaded', function() {
    const languageText = document.querySelector('.language__text');
    const languageDropdown = document.querySelector('.language__dropdown');

    // Функция для переключения классов
    function togglePanel() {
        languageText.classList.toggle('open');
        languageDropdown.classList.toggle('show');
    }

    // Функция для удаления классов
    function closePanel() {
        languageText.classList.remove('open');
        languageDropdown.classList.remove('show');
    }

    // Обработчик клика на user-panel__col
    languageText.addEventListener('click', function(event) {
        event.stopPropagation();  // Останавливаем всплытие события, чтобы не вызвать закрытие при клике на саму панель
        togglePanel();
    });

    // Обработчик клика на свободную область (document)
    document.addEventListener('click', function(event) {
        // Если клик не по панели, закрываем панель
        if (!languageText.contains(event.target) && !languageDropdown.contains(event.target)) {
            closePanel();
        }
    });
});

/*- mobile menu -*/
document.querySelector('.menu-btn').addEventListener('click', function() {
    const menuBtn = document.querySelector('.menu-btn');
    const headerCol = document.querySelector('.header__col');
    const header = document.querySelector('.header');
    const body = document.body;

    // Переключаем классы
    menuBtn.classList.toggle('close');
    headerCol.classList.toggle('show');
    header.classList.toggle('open');
    body.classList.toggle('m-scroll-none');
});


