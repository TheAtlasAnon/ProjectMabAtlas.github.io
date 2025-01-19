// افزودن انیمیشن به عناصر هنگام اسکرول
const animatedElements = document.querySelectorAll('.animated');

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fadeIn');
        }
    });
}, {
    threshold: 0.1
});

animatedElements.forEach((element) => {
    observer.observe(element);
});

// تغییر رنگ دکمه‌ها هنگام هاور
const buttons = document.querySelectorAll('.btn');

buttons.forEach((button) => {
    button.addEventListener('mouseover', () => {
        button.style.backgroundColor = '#45a049';
    });

    button.addEventListener('mouseout', () => {
        button.style.backgroundColor = '#4CAF50';
    });
});

// مدیریت منوی همبرگری
const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('.nav-list');

hamburger.addEventListener('click', () => {
    navList.classList.toggle('active');
    hamburger.classList.toggle('active');
});