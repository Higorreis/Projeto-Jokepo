const imagemDeFundo = [
    'url("assets/danny-greenberg-mIZrL0WQ3ac-unsplash.jpg")',
    'url("assets/declan-sun-gjZ5g0sSNVA-unsplash.jpg")',
    'url("assets/dibakar-roy-MtZESTeSbvI-unsplash.jpg")',
    'url("assets/peter-thomas-ISezKSUL2gk-unsplash.jpg")',
    'url("assets/realfish-jGcgl4-FcPI-unsplash.jpg")',
    'url("assets/ruan-richard-rodrigues-yH1d6xvtYm8-unsplash.jpg")',
    'url("assets/sasha-matveeva-5_mOwZ-Ab-k-unsplash.jpg")'
];
let ultimaImagem = null;

function escolherImagemDeFundo() {
    let novaImagem;
    do {
        novaImagem = Math.floor(Math.random() * imagemDeFundo.length);
    } while (ultimaImagem === novaImagem);
    ultimaImagem = novaImagem;
    return novaImagem;
}

function aplicarImagemDeFundo() {
    const indice = escolherImagemDeFundo();
    const imagem = imagemDeFundo[indice];
    document.body.style.backgroundImage = imagem;
    document.body.style.transition = "background-image 1s ease-in-out";
}

document.addEventListener('DOMContentLoaded', () => {

    aplicarImagemDeFundo();
    setInterval(aplicarImagemDeFundo, 5000)
})

const res = document.getElementById('resul')
const pontuacao_Humano = document.getElementById('human')
const pontuacao_Maquina = document.getElementById('manchine')
let pont_Hum = 0
let pont_Maq = 0

const playHuman = (human) => {
    console.log(human);
    playTheGame(human, playManchine())
}

const playManchine = () => {
    const choices = ['tesoura','papel','pedra']
    const randomNumber = Math.floor(Math.random() * 3)
    return choices[randomNumber]
}

const playTheGame = (human, manchine) => {
    if(human === manchine){
        res.innerHTML = `Empate! 🤝Ambos escolheram <strong>${human}</strong>`
    } else if(
        (human === 'tesoura' && manchine === 'papel') ||
        (human === 'papel' && manchine === 'pedra')||
        (human === 'pedra' && manchine === 'tesoura')
    ){
        res.innerHTML = `Você Venceu! 🎉 <br> Você: <strong>${human}</strong> <br> Máquina: <strong>${manchine}</strong>`
        pont_Hum = pont_Hum + 1
        pontuacao_Humano.innerHTML = pont_Hum
    }else{
        res.innerHTML = `Você Perdeu! 😞 <br> Você: <strong>${human}</strong> <br> Máquina: <strong>${manchine}</strong>`
        pont_Maq = pont_Maq + 1
        pontuacao_Maquina.innerHTML = pont_Maq
    }

}




