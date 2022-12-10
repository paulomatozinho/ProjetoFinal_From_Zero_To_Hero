//Menu Mobile
const menu = document.querySelector('.menu');
const navMenu = document.querySelector('.nav-menu');

menu.addEventListener('click', () => {
    menu.classList.toggle('ativo');
    navMenu.classList.toggle('ativo');
})

//Carrossel
let trocaImagem = 5000;

function banner1() {
    document.getElementById("banner").src = "img/img1.jpg";
    setTimeout("banner2()", trocaImagem);
}

function banner2() {
    document.getElementById("banner").src = "img/img2.jpg";
    setTimeout("banner3()", trocaImagem);
}

function banner3() {
    document.getElementById("banner").src = "img/img3.jpg";
    setTimeout("banner1()", trocaImagem);
}


// Validação do CPF


let form = document.getElementById('form');
let name = document.getElementById('name');
let email = document.getElementById('email');

let spanMensagem = document.getElementsByClassName('span-required');

//validar quando usuário sai do campo
name.onblur = function (event) {
    if (event.target.value.length < 3) {
        spanMensagem.textContent = "tudo ok";
        spanMensagem.style.display = 'block';
    }
}





// function validacao() {
//     console.log('iniciando validacao');
//     let cpf = document.getElementById('cpf_digitado').value;
//     console.log(cpf.length);
//     if (cpf.length == 11) {
//         alert('Suas informações foram enviadas')
//     } else {
//         alert('cpf invalido')
//     }
// }
