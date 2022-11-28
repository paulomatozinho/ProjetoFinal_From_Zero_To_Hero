//Menu Mobile
const menu = document.querySelector('.menu');
const navMenu = document.querySelector('.nav-menu');

menu.addEventListener('click', () => {
    menu.classList.toggle('ativo');
    navMenu.classList.toggle('ativo');
})

// Validação Formulário
const form   = document.getElementById('form');
const campos = document.querySelectorAll('.required');
const span   = document.querySelectorAll('.span-required');
