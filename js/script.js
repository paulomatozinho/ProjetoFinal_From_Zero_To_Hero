//Menu Mobile
const menu = document.querySelector('.menu');
const navMenu = document.querySelector('.nav-menu');

menu.addEventListener('click', () => {
    menu.classList.toggle('ativo');
    navMenu.classList.toggle('ativo');
})

// Validação Formulário
const form = document.getElementById('form');
const campos = document.querySelectorAll('.required');
const span = document.querySelectorAll('.span-required');

function validacao() {
    console.log('iniciando validacao');
    let cpf = document.getElementById('cpf_digitado').value;
    console.log(cpf.length);
    if (cpf.length == 11) {
        console.log('cpf ok')
    } else {
        console.log('cpf invalido')
    }
}
