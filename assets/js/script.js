var jogadorEscolha = 0;
var computadorEscolha = 0;
var ganhador = -1
var pontuacaoJogador = 0;
var computadorPontuacao = 0;
// Variaveis Declarada para escolha do jogador e do computador sendo 0 = a empate

function jogar (escolha) {
    jogadorEscolha = escolha;
    computadorEscolha = Math.floor((Math.random() * (3 - 1 + 1 )) + 1);
    //utilizei o radom para ele sortear numeros aleatorio porem fiz uma conta para nao passar de 3 e usei o floor para
    //arredondar para baixo.
    
    // 1 = Pedra
    // 2 = Papel
    // 3 = Tesoura
    if((jogadorEscolha == 1) && (computadorEscolha == 1)) {
        ganhador = 0;
    }
    else if((jogadorEscolha == 1) && (computadorEscolha == 2)) {
        ganhador = 2;
    }
    else if((jogadorEscolha == 1 ) && (computadorEscolha == 3)) {
        ganhador = 1;
    }

    // >>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<

    else if((jogadorEscolha == 2) && (computadorEscolha == 1)) {
        ganhador = 1;
    }
    else if((jogadorEscolha == 2) && (computadorEscolha == 2)) {
        ganhador = 0;
    }
    else if((jogadorEscolha == 2 ) && (computadorEscolha == 3)) {
        ganhador = 2;
    }

    // >>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<

    else if((jogadorEscolha == 3) && (computadorEscolha == 1)) {
        ganhador = 2;
    }
    else if((jogadorEscolha == 3) && (computadorEscolha == 2)) {
        ganhador = 1;
    }
    else if((jogadorEscolha == 3 ) && (computadorEscolha == 3)) {
        ganhador = 0;
    }

    // >>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<

    if(ganhador == 0) {
        document.querySelector('#mensagem').innerHTML = 'Empate';
    }
    else if(ganhador == 1) {
        document.querySelector('#mensagem').innerHTML = 'Jogador Ganhou';
        pontuacaoJogador++;
    }
    else if(ganhador == 2) {
        document.querySelector('#mensagem').innerHTML = 'Computador Ganhou';
        computadorPontuacao++;
    }

    document.querySelector('#score-people').innerHTML = pontuacaoJogador;
    document.querySelector('#score-machine').innerHTML = computadorPontuacao;

    if(pontuacaoJogador == 5){
        alert('Jogador Ganhou!')
        document.location.reload(true);
    }
    if(computadorPontuacao == 5){
        alert('Computador Ganhou!')
        document.location.reload(true);
    }
}


