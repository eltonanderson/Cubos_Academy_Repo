const prova = {
    aluno: "João",
    materia: "Português",
    valor: 10,
    questoes: [
        {
            resposta: "a",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        },
        {
            resposta: "e",
            correta: "b"
        },
        {
            resposta: "b",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        }
    ]
};

function corrigirProva (prova) {
    let numeroDeAcertos = 0
    for (i=0; i < prova.questoes.length; i++) {
        if (prova.questoes[i].correta === prova.questoes[i].resposta) {
            numeroDeAcertos++
        }
    }
    let valorPorQuestao = prova.valor / prova.questoes.length
    let notFinal = numeroDeAcertos * valorPorQuestao   
    console.log(`O aluno(a) ${prova.aluno} acertou ${numeroDeAcertos} questões e obteve nota ${notFinal}`)
}

corrigirProva (prova)