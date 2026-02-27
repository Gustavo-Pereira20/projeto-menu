const criarBotaoVoltar = () => {

    const btnVoltar = document.createElement('button');

    btnVoltar.innerText = 'Voltar';
    btnVoltar.style.marginTop = '20px';

    btnVoltar.addEventListener('click', function(){
        window.location.href = '../index.html'
    });

    document.body.appendChild(btnVoltar)

};

window.onload = criarBotaoVoltar()