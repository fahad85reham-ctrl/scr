// script.js — ALF2

// إخفاء العنوان عند الكتابة في حقل البحث
const input = document.querySelector('.search-input');
const titleStage = document.querySelector('.title-stage');

input.addEventListener('focus', () => {
    titleStage.classList.add('searching');
});

input.addEventListener('blur', () => {
    titleStage.classList.remove('searching');
});   
