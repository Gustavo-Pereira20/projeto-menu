const btnP1 = document.querySelector('#inputP1');
const btnP2 = document.querySelector('#inputP2');
const btnP3 = document.querySelector('#inputP3');

const criarBotaoVoltar = () => {

    const btnVoltar = document.createElement('button');

    btnVoltar.innerText = 'Voltar';
    btnVoltar.style.marginTop = '20px';

    function navegar(){
        window.location.href = '../index.html'
    };

    btnVoltar.addEventListener('click', navegar);

    document.body.appendChild(btnVoltar);

};

btnP1.addEventListener('click', function (){
    window.location.href='./pages/projeto01.html'
    window.onload = criarBotaoVoltar(); 
})

btnP2.addEventListener('click', function (){
    window.location.href='./pages/projeto02.html'
})

btnP3.addEventListener('click', function (){
    window.location.href='./pages/projeto03.html'
})