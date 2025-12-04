document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Плавний скрол при кліку на навігацію
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // 2. Обробка форми (імітація відправки)
    const form = document.getElementById('contactForm');
    
    if(form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault(); // Забороняємо перезавантаження сторінки
            
            // Отримуємо значення
            const name = document.getElementById('name').value;
            
            // Тут міг би бути код для відправки на сервер
            // Але для навчального проекту виводимо повідомлення:
            alert(`СКОБ, ${name}! Ваше повідомлення надіслано. Зв'яжемось з вами найближчим часом.`);
            
            // Очистити форму
            form.reset();
        });
    }

    // 3. Тут можна додати логіку для "Бургер меню" на мобільному
    // (для простоти в CSS воно зараз приховане, але це гарне місце для розширення JS)
});