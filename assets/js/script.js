// primeiro passo é identificar a tecla precionada
document.body.addEventListener('keyup', (event) => {
    // Identifiquei e já converti para low, para ficar igual ao nome do sound e a tag audio no html
    playSound(event.code.toLowerCase());
});
// Função para pegar os valores do input, e chamar a função para tocar o audio(criar composição)
document.querySelector('.composer button').addEventListener('click', () => {
    // Pega o valor digitado no input que vem como string
    let song = document.querySelector('#input').value;

    // Verificamos se não está vazio
    if (song !== '') {
        // peguei os valores do input que é uma string e converti em array.
        let songArray = song.split('');
        // Chamamos a função, que toca o array
        playComposition(songArray);
    }
});

function playSound(sound) {
    // "Convertendo" o elemento html em objeto js
    let audioElement = document.querySelector(`#s_${sound}`);
    let keyElement = document.querySelector(`div[data-key="${sound}"]`);

    if (audioElement) {
        // Setando o time para 0, para tocar o audio no mesmo instante que apertar a tecla
        audioElement.currentTime = 0;
        audioElement.play();
    }

    // Verificando se tem a classe no css (o efeito visual de cor amarela)
    if (keyElement) {
        keyElement.classList.add('active');

        setTimeout(() => {
            keyElement.classList.remove('active');
        }, 300);
    }
}

// Fazer o intervalo e pecorrer o array
function playComposition(songArray) {
    let wait = 0;

    for (let songItem of songArray) {
        setTimeout(() => {
            playSound(`key${songItem}`);
        }, wait);

        wait += 250;

    }
}