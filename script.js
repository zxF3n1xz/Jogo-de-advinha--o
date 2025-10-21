

//utilitarios

const pegarElemento = (id) => document.getElementById(id);
const pegarNumero = (id) => pegarElemento(id).value
const valorNegativo = () => valor < 0;
const limparCampos = () => document.getElementById('numero').value = '';

//pegar número aleatório de 1 a 100

const numeroAleatorio = () => Math.floor(Math.random() * 100) + 1;
let numeroSecreto = numeroAleatorio();

//variavel de tentativas

let tentativa = 10;

//reset do jogo
function resetarJogo() {
    numeroSecreto = numeroAleatorio(); // gera novo número
    tentativa = 10; // reinicia tentativas
    pegarElemento("tentativas").textContent = `Tentativas restantes: ${tentativa}`;
    limparCampos(); // limpa input
}


//Inicio do jogo

function chutar(){

    //Pegar numero

    const numero = Number(pegarNumero('numero'));

    //Parar se a caixa estiver vazia, com número negativo ou for maior que 100

    if (numero === ""){
        alert("Digite um valor");
        limparCampos();
        return;
    };
    if(numero <= 0){
        alert('O número não pode ser nulo ou negativo');
        limparCampos();
        return;
    };
    if (numero > 100){
        alert('Escolha um número entre 1 e 100')
        limparCampos();
        return;
    };

    //atualizar Tentativas

    const atualizarTentativas = () => {
    tentativa--; 
    pegarElemento("tentativas").textContent =
        `Tentativas restantes: ${tentativa}`;
    };

    atualizarTentativas();

    //Mostrar dicas ao usuário

    if (numeroSecreto > numero){
        alert(`O número aleatório é maior que ${numero}`)
        limparCampos();
    }; 
    if (numeroSecreto < numero){
        alert(`O número aleatório é menor que ${numero}`)
        limparCampos();
    };

    //vitória de acerto

    if (numeroSecreto === numero){
        alert(`Parabéns! Você acertou!`)
        resetarJogo();
    };

    //tentativas zeradas

    if (tentativa === 0){
        if (numeroSecreto === numero){
            alert(`Parabéns! Você acertou!`);
            resetarJogo();   
        }
        else{
            alert("Você perdeu! Tente novamente")
            resetarJogo();
        }

    }

}




















































/*
Funcionalidades JavaScript:

Ao carregar a página, o JavaScript deve:

Inicializar o contador de tentativas.

Ao clicar no botão "Chutar", o JavaScript deve:

Capturar o valor inserido no input (palpite do jogador).

Validar se o palpite é um número válido entre 1 e 100.

Comparar o palpite com o número secreto e exibir uma mensagem:

"Você acertou!" (e o jogo termina).

"O número secreto é maior" (e o jogador continua tentando).

"O número secreto é menor" (e o jogador continua tentando).

Decrementar o contador de tentativas.

Exibir o número de tentativas restantes.

Se o jogador atingir o número máximo de tentativas, o jogo termina com a mensagem "Você perdeu! O número secreto era X".

Dicas:

Use a função Math.random() para gerar o número aleatório.

Use parseInt() para converter o valor do input em um número inteiro.

Use estruturas de controle if, else if e else para a lógica do jogo.

Use loops while ou for para controlar as tentativas do jogador.
*/