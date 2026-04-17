const body = document.querySelector('body')


if (localStorage.getItem('theme')){
    body.classList.add(localStorage.getItem('theme'))
}

const criarBotaoVoltar = () => {

    const btnVoltar = document.createElement('button');

    btnVoltar.innerText = 'Voltar';
    btnVoltar.className = 'btn-navegacao'

    btnVoltar.addEventListener('click', () => {
        window.location.href = '../index.html'
    });

    document.body.appendChild(btnVoltar)

};

const criarBotaoTheme = () => {

    const btnTheme = document.createElement('button')

    btnTheme.innerText = (localStorage.getItem('theme') == 'dark' ? 'light_mode' : 'dark_mode')
    btnTheme.className = 'btn-theme'

    btnTheme.addEventListener('click', () => {
        body.classList.toggle('dark')
        const isDark = body.classList.contains('dark')
        btnTheme.textContent = isDark ? 'light_mode' : 'dark_mode';
        localStorage.setItem('theme', isDark ? 'dark' : 'light')
    })

    document.body.appendChild(btnTheme)
}

// 1. Lógica Automática para o Menu (Index)
// Buscamos todos os inputs do tipo botão dentro da classe .project__button-group
const botoesProjeto = document.querySelectorAll('.project__button-group input[type="button"]')
console.log(botoesProjeto)

if (botoesProjeto.length > 0 ) {
    botoesProjeto.forEach((botao, index) => {
        botao.classList.add(`btn-teste${index}`)
        botao.addEventListener('click', () => {
            // O index começa em 0, então somamos 1 para bater com "projeto01", "projeto02" ...
            const numeroProjeto = (index + 1).toString().padStart(2, '0');
            window.location.href = `./pages/projeto${numeroProjeto}.html`;
        });
    });
} else {
    window.onload = criarBotaoVoltar()
};

window.onload = criarBotaoTheme()