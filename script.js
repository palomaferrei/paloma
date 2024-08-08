const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPerguntas = document.querySelector('caixa-perguntas');
const caixaAlternativas = document.querySelector('caixa-alternativas');
const caixaResultado = document.querySelector('caixa-resultado');
const textoResultado = document.querySelector('texto-resultado');
 
const perguntas = [
    {
    enunciado: "Pergunta 1",
    alternativas: ["Alternativa ", "Alternativa 2"],
    },
    {
    enunciado: "Pergunta 2",
    alternativas: ["Alternativa 1", "Alternativa 12"],
    },
    ]; 


function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent =  perguntaAtual.enunciado;
}
function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("buton");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click",function () { 
            atual++;
            mostraPergunta();
        } );    
        caixaAlternativas.apendChield(botaoAlternativas);
    }
}

